import raf from 'raf';

// a spring-based tween tool with dynamic retargeting
export default class SpringDamper {
  constructor(target, stiffness = 15, damping = 15) {
    this.target = target;
    this.stiffness = stiffness;
    this.damping = damping;
    this.velocity = this._initializeVelocity(target);
    this.animationFrameId = null;
    this.currentValues = this._clone(target);
    this.paused = false;
    this.logging = false;
  }

  _initializeVelocity(value) {
    if (typeof value === 'number') {
      return 0;
    } else if (Array.isArray(value) || ArrayBuffer.isView(value)) {
      return value.map(() => 0);
    } else {
      const velocity = {};
      for (const key in value) {
        velocity[key] = 0;
      }
      return velocity;
    }
  }

  _clone(value) {
    if (Array.isArray(value)) {
      return [...value];
    } else if (ArrayBuffer.isView(value)) {
      return value.slice();
    } else if (typeof value === 'object') {
      return { ...value };
    } else {
      return value;
    }
  }

  updateTarget(newTarget) {
    this.target = newTarget;
  }

  updateInitialValues(newInitialValues) {
    this.currentValues = this._clone(newInitialValues);
  }

  _interpolateSpring(currentValue, targetValue, velocity, stiffness, damping, dt) {
    const displacement = targetValue - currentValue;
    const springForce = stiffness * displacement;
    const dampingForce = -damping * velocity;
    const totalForce = springForce + dampingForce;
  
    const newVelocity = velocity + totalForce * dt;
    const newCurrentValue = currentValue + newVelocity * dt; // Use the updated velocity
  
    return { newCurrentValue, newVelocity };
  } 
  
  
  step(dt) {
    if (this.paused) {
      return this.currentValues;
    }
  
    const interpolate = (currentValue, targetValue, velocity) =>
      this._interpolateSpring(
        currentValue,
        targetValue,
        velocity,
        this.stiffness,
        this.damping,
        dt
      );
  
    if (typeof this.target === 'number') {
      const { newCurrentValue, newVelocity } = interpolate(
        this.currentValues,
        this.target,
        this.velocity
      );
      this.currentValues = newCurrentValue;
      this.velocity = newVelocity;
    } else if (Array.isArray(this.target) || ArrayBuffer.isView(this.target)) {
      for (let i = 0; i < this.target.length; i++) {
        const { newCurrentValue, newVelocity } = interpolate(
          this.currentValues[i],
          this.target[i],
          this.velocity[i]
        );
        this.currentValues[i] = newCurrentValue;
        this.velocity[i] = newVelocity;
      }
    } else {
      for (const key in this.target) {
        const { newCurrentValue, newVelocity } = interpolate(
          this.currentValues[key],
          this.target[key],
          this.velocity[key]
        );
        this.currentValues[key] = newCurrentValue;
        this.velocity[key] = newVelocity;
      }
    }
  
    return this.currentValues;
  }

  animate(onUpdate) {
    console.log('animating...', this.target, this)
    const stepDuration = 1 / 60; // 60 FPS

    const loop = () => {
      if (this.logging) {
        console.log('looping spring...', this.target, this)
      }
      const interpolatedValues = this.step(stepDuration);
      onUpdate(interpolatedValues);
      this.animationFrameId = raf(loop);
    };

    this.stop(); // Stop any ongoing animation before starting a new loop
    this.animationFrameId = raf(loop);
  
  }

  pause() {
    this.paused = true;
  }

  resume() {
    this.paused = false;
  }

  stop() {
    raf.cancel(this.animationFrameId);
  }
}

