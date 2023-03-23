function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _createForOfIteratorHelperLoose(o) {
  var i = 0;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) return function () {
      if (i >= o.length) return {
        done: true
      };
      return {
        done: false,
        value: o[i++]
      };
    };
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  i = o[Symbol.iterator]();
  return i.next.bind(i);
}

var PowerEdge = function PowerEdge(source, target, type) {
  this.source = source;
  this.target = target;
  this.type = type;
};
var Configuration = /*#__PURE__*/function () {
  function Configuration(n, edges, linkAccessor, rootGroup) {
    var _this = this;

    this.linkAccessor = linkAccessor;
    this.modules = new Array(n);
    this.roots = [];

    if (rootGroup) {
      this.initModulesFromGroup(rootGroup);
    } else {
      this.roots.push(new ModuleSet());

      for (var i = 0; i < n; ++i) {
        this.roots[0].add(this.modules[i] = new Module(i));
      }
    }

    this.R = edges.length;
    edges.forEach(function (e) {
      var s = _this.modules[linkAccessor.getSourceIndex(e)],
          t = _this.modules[linkAccessor.getTargetIndex(e)],
          type = linkAccessor.getType(e);

      s.outgoing.add(type, t);
      t.incoming.add(type, s);
    });
  }

  var _proto = Configuration.prototype;

  _proto.initModulesFromGroup = function initModulesFromGroup(group) {
    var moduleSet = new ModuleSet();
    this.roots.push(moduleSet);

    for (var i = 0; i < group.leaves.length; ++i) {
      var node = group.leaves[i];
      var module = new Module(node.id);
      this.modules[node.id] = module;
      moduleSet.add(module);
    }

    if (group.groups) {
      for (var j = 0; j < group.groups.length; ++j) {
        var child = group.groups[j]; // Propagate group properties (like padding, stiffness, ...) as module definition so that the generated power graph group will inherit it

        var definition = {};

        for (var prop in child) {
          if (prop !== "leaves" && prop !== "groups" && child.hasOwnProperty(prop)) definition[prop] = child[prop];
        } // Use negative module id to avoid clashes between predefined and generated modules


        moduleSet.add(new Module(-1 - j, new LinkSets(), new LinkSets(), this.initModulesFromGroup(child), definition));
      }
    }

    return moduleSet;
  } // merge modules a and b keeping track of their power edges and removing the from roots
  ;

  _proto.merge = function merge(a, b, k) {
    if (k === void 0) {
      k = 0;
    }

    var inInt = a.incoming.intersection(b.incoming),
        outInt = a.outgoing.intersection(b.outgoing);
    var children = new ModuleSet();
    children.add(a);
    children.add(b);
    var m = new Module(this.modules.length, outInt, inInt, children);
    this.modules.push(m);

    var update = function update(s, i, o) {
      s.forAll(function (ms, linktype) {
        ms.forAll(function (n) {
          var nls = n[i];
          nls.add(linktype, m);
          nls.remove(linktype, a);
          nls.remove(linktype, b);
          a[o].remove(linktype, n);
          b[o].remove(linktype, n);
        });
      });
    };

    update(outInt, "incoming", "outgoing");
    update(inInt, "outgoing", "incoming");
    this.R -= inInt.count() + outInt.count();
    this.roots[k].remove(a);
    this.roots[k].remove(b);
    this.roots[k].add(m);
    return m;
  };

  _proto.rootMerges = function rootMerges(k) {
    if (k === void 0) {
      k = 0;
    }

    var rs = this.roots[k].modules();
    var n = rs.length;
    var merges = new Array(n * (n - 1));
    var ctr = 0;

    for (var i = 0, i_ = n - 1; i < i_; ++i) {
      for (var j = i + 1; j < n; ++j) {
        var a = rs[i],
            b = rs[j];
        merges[ctr] = {
          id: ctr,
          nEdges: this.nEdges(a, b),
          a: a,
          b: b
        };
        ctr++;
      }
    }

    return merges;
  };

  _proto.greedyMerge = function greedyMerge() {
    for (var i = 0; i < this.roots.length; ++i) {
      // Handle single nested module case
      if (this.roots[i].modules().length < 2) continue; // find the merge that allows for the most edges to be removed.  secondary ordering based on arbitrary id (for predictability)

      var ms = this.rootMerges(i).sort(function (a, b) {
        return a.nEdges == b.nEdges ? a.id - b.id : a.nEdges - b.nEdges;
      });
      var m = ms[0];
      if (m.nEdges >= this.R) continue;
      this.merge(m.a, m.b, i);
      return true;
    }
  };

  _proto.nEdges = function nEdges(a, b) {
    var inInt = a.incoming.intersection(b.incoming),
        outInt = a.outgoing.intersection(b.outgoing);
    return this.R - inInt.count() - outInt.count();
  };

  _proto.getGroupHierarchy = function getGroupHierarchy(retargetedEdges) {
    var _this2 = this;

    var groups = [];
    var root = {};
    toGroups(this.roots[0], root, groups);
    var es = this.allEdges();
    es.forEach(function (e) {
      var a = _this2.modules[e.source];
      var b = _this2.modules[e.target];
      retargetedEdges.push(new PowerEdge(typeof a.gid === "undefined" ? e.source : groups[a.gid], typeof b.gid === "undefined" ? e.target : groups[b.gid], e.type));
    });
    return groups;
  };

  _proto.allEdges = function allEdges() {
    var es = [];
    Configuration.getEdges(this.roots[0], es);
    return es;
  };

  Configuration.getEdges = function getEdges(modules, es) {
    modules.forAll(function (m) {
      m.getEdges(es);
      Configuration.getEdges(m.children, es);
    });
  };

  return Configuration;
}();

function toGroups(modules, group, groups) {
  modules.forAll(function (m) {
    if (m.isLeaf()) {
      if (!group.leaves) group.leaves = [];
      group.leaves.push(m.id);
    } else {
      var g = group;
      m.gid = groups.length;

      if (!m.isIsland() || m.isPredefined()) {
        g = {
          id: m.gid
        };
        if (m.isPredefined()) // Apply original group properties
          for (var prop in m.definition) {
            g[prop] = m.definition[prop];
          }
        if (!group.groups) group.groups = [];
        group.groups.push(m.gid);
        groups.push(g);
      }

      toGroups(m.children, g, groups);
    }
  });
}

var Module = /*#__PURE__*/function () {
  function Module(id, outgoing, incoming, children, definition) {
    if (outgoing === void 0) {
      outgoing = new LinkSets();
    }

    if (incoming === void 0) {
      incoming = new LinkSets();
    }

    if (children === void 0) {
      children = new ModuleSet();
    }

    this.id = id;
    this.outgoing = outgoing;
    this.incoming = incoming;
    this.children = children;
    this.definition = definition;
  }

  var _proto2 = Module.prototype;

  _proto2.getEdges = function getEdges(es) {
    var _this3 = this;

    this.outgoing.forAll(function (ms, edgetype) {
      ms.forAll(function (target) {
        es.push(new PowerEdge(_this3.id, target.id, edgetype));
      });
    });
  };

  _proto2.isLeaf = function isLeaf() {
    return this.children.count() === 0;
  };

  _proto2.isIsland = function isIsland() {
    return this.outgoing.count() === 0 && this.incoming.count() === 0;
  };

  _proto2.isPredefined = function isPredefined() {
    return typeof this.definition !== "undefined";
  };

  return Module;
}();

function _intersection(m, n) {
  var i = {};

  for (var v in m) {
    if (v in n) i[v] = m[v];
  }

  return i;
}

var ModuleSet = /*#__PURE__*/function () {
  function ModuleSet() {
    this.table = {};
  }

  var _proto3 = ModuleSet.prototype;

  _proto3.count = function count() {
    return Object.keys(this.table).length;
  };

  _proto3.intersection = function intersection(other) {
    var result = new ModuleSet();
    result.table = _intersection(this.table, other.table);
    return result;
  };

  _proto3.intersectionCount = function intersectionCount(other) {
    return this.intersection(other).count();
  };

  _proto3.contains = function contains(id) {
    return id in this.table;
  };

  _proto3.add = function add(m) {
    this.table[m.id] = m;
  };

  _proto3.remove = function remove(m) {
    delete this.table[m.id];
  };

  _proto3.forAll = function forAll(f) {
    for (var mid in this.table) {
      f(this.table[mid]);
    }
  };

  _proto3.modules = function modules() {
    var vs = [];
    this.forAll(function (m) {
      if (!m.isPredefined()) vs.push(m);
    });
    return vs;
  };

  return ModuleSet;
}();
var LinkSets = /*#__PURE__*/function () {
  function LinkSets() {
    this.sets = {};
    this.n = 0;
  }

  var _proto4 = LinkSets.prototype;

  _proto4.count = function count() {
    return this.n;
  };

  _proto4.contains = function contains(id) {
    var result = false;
    this.forAllModules(function (m) {
      if (!result && m.id == id) {
        result = true;
      }
    });
    return result;
  };

  _proto4.add = function add(linktype, m) {
    var s = linktype in this.sets ? this.sets[linktype] : this.sets[linktype] = new ModuleSet();
    s.add(m);
    ++this.n;
  };

  _proto4.remove = function remove(linktype, m) {
    var ms = this.sets[linktype];
    ms.remove(m);

    if (ms.count() === 0) {
      delete this.sets[linktype];
    }

    --this.n;
  };

  _proto4.forAll = function forAll(f) {
    for (var linktype in this.sets) {
      f(this.sets[linktype], Number(linktype));
    }
  };

  _proto4.forAllModules = function forAllModules(f) {
    this.forAll(function (ms, lt) {
      return ms.forAll(f);
    });
  };

  _proto4.intersection = function intersection(other) {
    var result = new LinkSets();
    this.forAll(function (ms, lt) {
      if (lt in other.sets) {
        var i = ms.intersection(other.sets[lt]),
            n = i.count();

        if (n > 0) {
          result.sets[lt] = i;
          result.n += n;
        }
      }
    });
    return result;
  };

  return LinkSets;
}();

function getGroups(nodes, links, la, rootGroup) {
  var n = nodes.length,
      c = new Configuration(n, links, la, rootGroup);

  while (c.greedyMerge()) {
  }

  var powerEdges = [];
  var g = c.getGroupHierarchy(powerEdges);
  powerEdges.forEach(function (e) {
    var f = function f(end) {
      var g = e[end];
      if (typeof g == "number") e[end] = nodes[g];
    };

    f("source");
    f("target");
  });
  return {
    groups: g,
    powerEdges: powerEdges
  };
}

// compute the size of the union of two sets a and b
function unionCount(a, b) {
  var u = {};

  for (var i in a) {
    u[i] = {};
  }

  for (var i in b) {
    u[i] = {};
  }

  return Object.keys(u).length;
} // compute the size of the intersection of two sets a and b


function intersectionCount(a, b) {
  var n = 0;

  for (var i in a) {
    if (typeof b[i] !== 'undefined') ++n;
  }

  return n;
}

function getNeighbours(links, la) {
  var neighbours = {};

  var addNeighbours = function addNeighbours(u, v) {
    if (typeof neighbours[u] === 'undefined') neighbours[u] = {};
    neighbours[u][v] = {};
  };

  links.forEach(function (e) {
    var u = la.getSourceIndex(e),
        v = la.getTargetIndex(e);
    addNeighbours(u, v);
    addNeighbours(v, u);
  });
  return neighbours;
} // modify the lengths of the specified links by the result of function f weighted by w


function computeLinkLengths(links, w, f, la) {
  var neighbours = getNeighbours(links, la);
  links.forEach(function (l) {
    var a = neighbours[la.getSourceIndex(l)];
    var b = neighbours[la.getTargetIndex(l)];
    la.setLength(l, 1 + w * f(a, b));
  });
}
/** modify the specified link lengths based on the symmetric difference of their neighbours
 * @class symmetricDiffLinkLengths
 */


function symmetricDiffLinkLengths(links, la, w) {
  if (w === void 0) {
    w = 1;
  }

  computeLinkLengths(links, w, function (a, b) {
    return Math.sqrt(unionCount(a, b) - intersectionCount(a, b));
  }, la);
}
/** modify the specified links lengths based on the jaccard difference between their neighbours
 * @class jaccardLinkLengths
 */

function jaccardLinkLengths(links, la, w) {
  if (w === void 0) {
    w = 1;
  }

  computeLinkLengths(links, w, function (a, b) {
    return Math.min(Object.keys(a).length, Object.keys(b).length) < 1.1 ? 0 : intersectionCount(a, b) / unionCount(a, b);
  }, la);
}
/** generate separation constraints for all edges unless both their source and sink are in the same strongly connected component
 * @class generateDirectedEdgeConstraints
 */

function generateDirectedEdgeConstraints(n, links, axis, la) {
  var components = stronglyConnectedComponents(n, links, la);
  var nodes = {};
  components.forEach(function (c, i) {
    return c.forEach(function (v) {
      return nodes[v] = i;
    });
  });
  var constraints = [];
  links.forEach(function (l) {
    var ui = la.getSourceIndex(l),
        vi = la.getTargetIndex(l),
        u = nodes[ui],
        v = nodes[vi];

    if (u !== v) {
      constraints.push({
        axis: axis,
        left: ui,
        right: vi,
        gap: la.getMinSeparation(l)
      });
    }
  });
  return constraints;
}
/**
 * Tarjan's strongly connected components algorithm for directed graphs
 * returns an array of arrays of node indicies in each of the strongly connected components.
 * a vertex not in a SCC of two or more nodes is it's own SCC.
 * adaptation of https://en.wikipedia.org/wiki/Tarjan%27s_strongly_connected_components_algorithm
 */

function stronglyConnectedComponents(numVertices, edges, la) {
  var nodes = [];
  var index = 0;
  var stack = [];
  var components = [];

  function strongConnect(v) {
    // Set the depth index for v to the smallest unused index
    v.index = v.lowlink = index++;
    stack.push(v);
    v.onStack = true; // Consider successors of v

    for (var _iterator = _createForOfIteratorHelperLoose(v.out), _step; !(_step = _iterator()).done;) {
      var w = _step.value;

      if (typeof w.index === 'undefined') {
        // Successor w has not yet been visited; recurse on it
        strongConnect(w);
        v.lowlink = Math.min(v.lowlink, w.lowlink);
      } else if (w.onStack) {
        // Successor w is in stack S and hence in the current SCC
        v.lowlink = Math.min(v.lowlink, w.index);
      }
    } // If v is a root node, pop the stack and generate an SCC


    if (v.lowlink === v.index) {
      // start a new strongly connected component
      var component = [];

      while (stack.length) {
        w = stack.pop();
        w.onStack = false; //add w to current strongly connected component

        component.push(w);
        if (w === v) break;
      } // output the current strongly connected component


      components.push(component.map(function (v) {
        return v.id;
      }));
    }
  }

  for (var i = 0; i < numVertices; i++) {
    nodes.push({
      id: i,
      out: []
    });
  }

  for (var _iterator2 = _createForOfIteratorHelperLoose(edges), _step2; !(_step2 = _iterator2()).done;) {
    var e = _step2.value;
    var _v = nodes[la.getSourceIndex(e)],
        w = nodes[la.getTargetIndex(e)];

    _v.out.push(w);
  }

  for (var _i = 0, _nodes = nodes; _i < _nodes.length; _i++) {
    var v = _nodes[_i];
    if (typeof v.index === 'undefined') strongConnect(v);
  }

  return components;
}

/**
 * Descent respects a collection of locks over nodes that should not move
 * @class Locks
 */
var Locks = /*#__PURE__*/function () {
  function Locks() {
    this.locks = {};
  }
  /**
   * add a lock on the node at index id
   * @method add
   * @param id index of node to be locked
   * @param x required position for node
   */


  var _proto = Locks.prototype;

  _proto.add = function add(id, x) {
    /* DEBUG
                if (isNaN(x[0]) || isNaN(x[1])) debugger;
    DEBUG */
    this.locks[id] = x;
  }
  /**
   * @method clear clear all locks
   */
  ;

  _proto.clear = function clear() {
    this.locks = {};
  }
  /**
   * @isEmpty
   * @returns false if no locks exist
   */
  ;

  _proto.isEmpty = function isEmpty() {
    for (var l in this.locks) {
      return false;
    }

    return true;
  }
  /**
   * perform an operation on each lock
   * @apply
   */
  ;

  _proto.apply = function apply(f) {
    for (var l in this.locks) {
      f(Number(l), this.locks[l]);
    }
  };

  return Locks;
}();
var BYTES_PER_F32 = 32 / 8;
/**
 * Uses a gradient descent approach to reduce a stress or p-stress goal function over a graph with specified ideal edge lengths or a square matrix of dissimilarities.
 * The standard stress function over a graph nodes with position vectors x,y,z is (mathematica input):
 *   stress[x_,y_,z_,D_,w_]:=Sum[w[[i,j]] (length[x[[i]],y[[i]],z[[i]],x[[j]],y[[j]],z[[j]]]-d[[i,j]])^2,{i,Length[x]-1},{j,i+1,Length[x]}]
 * where: D is a square matrix of ideal separations between nodes, w is matrix of weights for those separations
 *        length[x1_, y1_, z1_, x2_, y2_, z2_] = Sqrt[(x1 - x2)^2 + (y1 - y2)^2 + (z1 - z2)^2]
 * below, we use wij = 1/(Dij^2)
 *
 * @class Descent
 */

var Descent = /*#__PURE__*/function () {
  /**
   * @method constructor
   * @param x {number[][]} initial coordinates for nodes
   * @param D {number[][]} matrix of desired distances between pairs of nodes
   * @param G {number[][]} [default=null] if specified, G is a matrix of weights for goal terms between pairs of nodes.
   * If G[i][j] > 1 and the separation between nodes i and j is greater than their ideal distance, then there is no contribution for this pair to the goal
   * If G[i][j] <= 1 then it is used as a weighting on the contribution of the variance between ideal and actual separation between i and j to the goal function
   */
  function Descent(x, D, G, wasm) {
    if (G === void 0) {
      G = null;
    }

    this.threshold = 0.0001; // Parameters for grid snap stress.
    // TODO: Make a pluggable "StressTerm" class instead of this
    // mess.

    this.numGridSnapNodes = 0;
    this.snapGridSize = 100;
    this.snapStrength = 1000;
    this.scaleSnapByMaxH = false;
    this.random = new PseudoRandom();
    this.project = null;
    this.wasm = wasm;
    this.x = x.map(function (xn) {
      return new Float32Array(xn);
    });
    this.k = x.length; // dimensionality

    var n = this.n = x[0].length; // number of nodes
    // Set up Wasm context

    this.setupWasm(D, G);
    this.a = new Array(this.k);
    this.b = new Array(this.k);
    this.c = new Array(this.k);
    this.d = new Array(this.k);
    this.e = new Array(this.k);
    this.ia = new Array(this.k);
    this.ib = new Array(this.k);
    this.xtmp = new Array(this.k);
    this.locks = new Locks();
    this.minD = Number.MAX_VALUE;
    var i = n,
        j;

    while (i--) {
      j = n;

      while (--j > i) {
        var d = D[i][j];

        if (d > 0 && d < this.minD) {
          this.minD = d;
        }
      }
    }

    if (this.minD === Number.MAX_VALUE) this.minD = 1;
    i = this.k;

    while (i--) {
      j = n;
      this.a[i] = new Float32Array(n);
      this.b[i] = new Float32Array(n);
      this.c[i] = new Float32Array(n);
      this.d[i] = new Float32Array(n);
      this.e[i] = new Float32Array(n);
      this.ia[i] = new Float32Array(n);
      this.ib[i] = new Float32Array(n);
      this.xtmp[i] = new Array(n);
    }
  }
  /** gradient vector
   * @property g {Float32Array[]}
   */


  var _proto2 = Descent.prototype;

  _proto2.computeDerivatives = function computeDerivatives(x) {
    var _this = this;

    if (this.k === 2) {
      var packedX = function () {
        var packed = new Float32Array(x[0].length * _this.k);
        x.forEach(function (xn, i) {
          return packed.set(xn, i * _this.n);
        });
        return packed;
      }();

      var outX = this.wasm.compute_2d(this.ctxPtr, packedX);

      if (x) {
        x.forEach(function (xn, i) {
          var slice = outX.subarray(i * _this.n, i * _this.n + _this.n);
          xn.set(slice);
        });
      }
    } else if (this.k === 3) {
      var _packedX = function () {
        var packed = new Float32Array(x[0].length * _this.k);
        x.forEach(function (xn, i) {
          return packed.set(xn, i * _this.n);
        });
        return packed;
      }();

      var _outX = this.wasm.compute_3d(this.ctxPtr, _packedX);

      if (x) {
        x.forEach(function (xn, i) {
          var slice = _outX.subarray(i * _this.n, i * _this.n + _this.n);

          xn.set(slice);
        });
      }
    } else {
      throw new Error('Invalid dimensionality');
    }

    if (!this.locks.isEmpty()) {
      this.locks.apply(function (u, p) {
        if (_this.k === 2) {
          _this.wasm.apply_lock_2d(_this.ctxPtr, u, p[0], p[1], x[0][u], x[1][u]);
        } else if (_this.k === 3) {
          _this.wasm.apply_lock_3d(_this.ctxPtr, u, p[0], p[1], p[2], x[0][u], x[1][u], x[2][u]);
        } else {
          throw new Error('Invalid dimensionality');
        }
      });
    }
  };

  _proto2.setupWasm = function setupWasm(D, G) {
    var _this2 = this;

    if (G === void 0) {
      G = null;
    }

    var allD = new Float32Array(this.n * this.n);
    var allG = G ? new Float32Array(this.n * this.k) : new Float32Array(0);
    D.forEach(function (dn, i) {
      allD.set(dn, i * _this2.n);
    });

    if (G) {
      G.forEach(function (gn, i) {
        allG.set(gn, i * _this2.n);
      });
    }

    var createrFn = this.k === 2 ? this.wasm.create_derivative_computer_ctx_2d : this.wasm.create_derivative_computer_ctx_3d;
    this.ctxPtr = createrFn(this.n, allD, allG);
  };

  Descent.createSquareMatrix = function createSquareMatrix(n, f) {
    var M = new Array(n);

    for (var i = 0; i < n; ++i) {
      M[i] = new Array(n);

      for (var j = 0; j < n; ++j) {
        M[i][j] = f(i, j);
      }
    }

    return M;
  };

  _proto2.offsetDir = function offsetDir() {
    var _this3 = this;

    var u = new Array(this.k);
    var l = 0;

    for (var i = 0; i < this.k; ++i) {
      var x = u[i] = this.random.getNextBetween(0.01, 1) - 0.5;
      l += x * x;
    }

    l = Math.sqrt(l);
    return u.map(function (x) {
      return x *= _this3.minD / l;
    });
  };

  Descent.dotProd = function dotProd(a, b) {
    var x = 0,
        i = a.length;

    while (i--) {
      x += a[i] * b[i];
    }

    return x;
  } // result r = matrix m * vector v
  ;

  Descent.rightMultiply = function rightMultiply(m, v, r) {
    var i = m.length;

    while (i--) {
      r[i] = Descent.dotProd(m[i], v);
    }
  } // computes the optimal step size to take in direction d using the
  // derivative information in this.g and this.H
  // returns the scalar multiplier to apply to d to get the optimal step
  ;

  _proto2.computeStepSize = function computeStepSize() {
    if (this.k === 2) {
      return this.wasm.compute_step_size_2d(this.ctxPtr);
    } else if (this.k === 3) {
      return this.wasm.compute_step_size_3d(this.ctxPtr);
    } else {
      throw new Error('Invalid dimensionality');
    }
  };

  _proto2.reduceStress = function reduceStress() {
    this.computeDerivatives(this.x);
    var alpha = this.computeStepSize();
    var thisG = this.g;

    for (var i = 0; i < this.k; ++i) {
      this.takeDescentStep(this.x[i], thisG[i], alpha);
    }

    return this.computeStress();
  };

  Descent.copy = function copy(a, b) {
    var m = a.length,
        n = b[0].length;

    for (var i = 0; i < m; ++i) {
      for (var j = 0; j < n; ++j) {
        b[i][j] = a[i][j];
      }
    }
  } // takes a step of stepSize * d from x0, and then project against any constraints.
  // result is returned in r.
  // x0: starting positions
  // r: result positions will be returned here
  // d: unconstrained descent vector
  // stepSize: amount to step along d
  ;

  _proto2.stepAndProject = function stepAndProject(x0, r, d, stepSize) {
    Descent.copy(x0, r);
    this.takeDescentStep(r[0], d[0], stepSize);
    if (this.project) this.project[0](x0[0], x0[1], r[0]);
    this.takeDescentStep(r[1], d[1], stepSize);
    if (this.project) this.project[1](r[0], x0[1], r[1]); // todo: allow projection against constraints in higher dimensions

    for (var i = 2; i < this.k; i++) {
      this.takeDescentStep(r[i], d[i], stepSize);
    } // the following makes locks extra sticky... but hides the result of the projection from the consumer
    //if (!this.locks.isEmpty()) {
    //    this.locks.apply((u, p) => {
    //        for (var i = 0; i < this.k; i++) {
    //            r[i][u] = p[i];
    //        }
    //    });
    //}

  };

  Descent.mApply = function mApply(m, n, f) {
    var i = m;

    while (i-- > 0) {
      var j = n;

      while (j-- > 0) {
        f(i, j);
      }
    }
  };

  _proto2.matrixApply = function matrixApply(f) {
    Descent.mApply(this.k, this.n, f);
  };

  _proto2.computeNextPosition = function computeNextPosition(x0, r) {
    this.computeDerivatives(x0);
    var alpha = this.computeStepSize();
    this.stepAndProject(x0, r, this.g, alpha);
    /* DEBUG
                for (var u: number = 0; u < this.n; ++u)
                    for (var i = 0; i < this.k; ++i)
                        if (isNaN(r[i][u])) debugger;
    DEBUG */

    if (this.project) {
      // This functionality is not yet implemented with the Wasm port
      throw new Error('Computing step with with `this.project` set is not yet implemented in Wasm port'); // this.matrixApply((i, j) => this.e[i][j] = x0[i][j] - r[i][j]);
      // var beta = this.computeStepSize(this.e);
      // beta = Math.max(0.2, Math.min(beta, 1));
      // this.stepAndProject(x0, r, this.e, beta);
    }
  };

  _proto2.run = function run(iterations) {
    var stress = Number.MAX_VALUE,
        converged = false;

    while (!converged && iterations-- > 0) {
      var s = this.rungeKutta();
      converged = Math.abs(stress / s - 1) < this.threshold;
      stress = s;
    }

    return stress;
  };

  _proto2.rungeKutta = function rungeKutta() {
    var _this4 = this;

    this.computeNextPosition(this.x, this.a);
    Descent.mid(this.x, this.a, this.ia);
    this.computeNextPosition(this.ia, this.b);
    Descent.mid(this.x, this.b, this.ib);
    this.computeNextPosition(this.ib, this.c);
    this.computeNextPosition(this.c, this.d);
    var disp = 0;
    this.matrixApply(function (i, j) {
      var x = (_this4.a[i][j] + 2.0 * _this4.b[i][j] + 2.0 * _this4.c[i][j] + _this4.d[i][j]) / 6.0,
          d = _this4.x[i][j] - x;
      disp += d * d;
      _this4.x[i][j] = x;
    });
    return disp;
  };

  Descent.mid = function mid(a, b, m) {
    Descent.mApply(a.length, a[0].length, function (i, j) {
      return m[i][j] = a[i][j] + (b[i][j] - a[i][j]) / 2.0;
    });
  };

  _proto2.takeDescentStep = function takeDescentStep(x, d, stepSize) {
    for (var i = 0; i < this.n; ++i) {
      x[i] = x[i] - stepSize * d[i];
    }
  };

  _proto2.computeStress = function computeStress() {
    var stress = 0;

    for (var u = 0, nMinus1 = this.n - 1; u < nMinus1; ++u) {
      for (var v = u + 1, n = this.n; v < n; ++v) {
        var l = 0;

        for (var i = 0; i < this.k; ++i) {
          var dx = this.x[i][u] - this.x[i][v];
          l += dx * dx;
        }

        l = Math.sqrt(l);
        var d = this.D[u][v];
        if (!isFinite(d)) continue;
        var rl = d - l;
        var d2 = d * d;
        stress += rl * rl / d2;
      }
    }

    return stress;
  };

  _createClass(Descent, [{
    key: "g",
    get: function get() {
      var _this5 = this;

      var memory = this.wasm.get_memory();
      var memoryView = new Float32Array(memory.buffer);
      var gPtr = this.k === 2 ? this.wasm.get_g_2d(this.ctxPtr) : this.wasm.get_g_3d(this.ctxPtr);
      var gOffset = gPtr / BYTES_PER_F32;
      return new Array(this.k).fill(null).map(function (_, i) {
        return memoryView.subarray(gOffset + i * _this5.n, gOffset + i * _this5.n + _this5.n);
      });
    }
  }, {
    key: "G",
    set: function set(newG) {
      var _this6 = this;

      var allG = new Float32Array(this.n * this.n);
      newG.forEach(function (Gn, i) {
        return allG.set(Gn, i * _this6.n);
      });

      if (this.k === 2) {
        this.wasm.set_G_2d(this.ctxPtr, allG);
      } else if (this.k === 3) {
        this.wasm.set_G_3d(this.ctxPtr, allG);
      } else {
        throw new Error('Invalid dimensionality');
      }
    }
    /**
     * matrix of desired distances between pairs of nodes
     */

  }, {
    key: "D",
    get: function get() {
      var _this7 = this;

      var memory = this.wasm.get_memory();
      var memoryView = new Float32Array(memory.buffer);
      var DPtr = this.k === 2 ? this.wasm.get_D_2d(this.ctxPtr) : this.wasm.get_D_3d(this.ctxPtr);
      var DOffset = DPtr / BYTES_PER_F32;
      return new Array(this.n).fill(null).map(function (_, i) {
        return memoryView.subarray(DOffset + i * _this7.n, DOffset + i * _this7.n + _this7.n);
      });
    }
  }]);

  return Descent;
}();
Descent.zeroDistance = 1e-10; // Linear congruential pseudo random number generator

var PseudoRandom = /*#__PURE__*/function () {
  function PseudoRandom(seed) {
    if (seed === void 0) {
      seed = 1;
    }

    this.seed = seed;
    this.a = 214013;
    this.c = 2531011;
    this.m = 2147483648;
    this.range = 32767;
  } // random real between 0 and 1


  var _proto3 = PseudoRandom.prototype;

  _proto3.getNext = function getNext() {
    this.seed = (this.seed * this.a + this.c) % this.m;
    return (this.seed >> 16) / this.range;
  } // random real between min and max
  ;

  _proto3.getNextBetween = function getNextBetween(min, max) {
    return min + this.getNext() * (max - min);
  };

  return PseudoRandom;
}();

var PositionStats = /*#__PURE__*/function () {
  function PositionStats(scale) {
    this.scale = scale;
    this.AB = 0;
    this.AD = 0;
    this.A2 = 0;
  }

  var _proto = PositionStats.prototype;

  _proto.addVariable = function addVariable(v) {
    var ai = this.scale / v.scale;
    var bi = v.offset / v.scale;
    var wi = v.weight;
    this.AB += wi * ai * bi;
    this.AD += wi * ai * v.desiredPosition;
    this.A2 += wi * ai * ai;
  };

  _proto.getPosn = function getPosn() {
    return (this.AD - this.AB) / this.A2;
  };

  return PositionStats;
}();
var Constraint = /*#__PURE__*/function () {
  function Constraint(left, right, gap, equality) {
    if (equality === void 0) {
      equality = false;
    }

    this.left = left;
    this.right = right;
    this.gap = gap;
    this.equality = equality;
    this.active = false;
    this.unsatisfiable = false;
    this.left = left;
    this.right = right;
    this.gap = gap;
    this.equality = equality;
  }

  var _proto2 = Constraint.prototype;

  _proto2.slack = function slack() {
    return this.unsatisfiable ? Number.MAX_VALUE : this.right.scale * this.right.position() - this.gap - this.left.scale * this.left.position();
  };

  return Constraint;
}();
var Variable = /*#__PURE__*/function () {
  function Variable(desiredPosition, weight, scale) {
    if (weight === void 0) {
      weight = 1;
    }

    if (scale === void 0) {
      scale = 1;
    }

    this.desiredPosition = desiredPosition;
    this.weight = weight;
    this.scale = scale;
    this.offset = 0;
  }

  var _proto3 = Variable.prototype;

  _proto3.dfdv = function dfdv() {
    return 2.0 * this.weight * (this.position() - this.desiredPosition);
  };

  _proto3.position = function position() {
    return (this.block.ps.scale * this.block.posn + this.offset) / this.scale;
  } // visit neighbours by active constraints within the same block
  ;

  _proto3.visitNeighbours = function visitNeighbours(prev, f) {
    var ff = function ff(c, next) {
      return c.active && prev !== next && f(c, next);
    };

    this.cOut.forEach(function (c) {
      return ff(c, c.right);
    });
    this.cIn.forEach(function (c) {
      return ff(c, c.left);
    });
  };

  return Variable;
}();
var Block = /*#__PURE__*/function () {
  function Block(v) {
    this.vars = [];
    v.offset = 0;
    this.ps = new PositionStats(v.scale);
    this.addVariable(v);
  }

  var _proto4 = Block.prototype;

  _proto4.addVariable = function addVariable(v) {
    v.block = this;
    this.vars.push(v);
    this.ps.addVariable(v);
    this.posn = this.ps.getPosn();
  } // move the block where it needs to be to minimize cost
  ;

  _proto4.updateWeightedPosition = function updateWeightedPosition() {
    this.ps.AB = this.ps.AD = this.ps.A2 = 0;

    for (var i = 0, n = this.vars.length; i < n; ++i) {
      this.ps.addVariable(this.vars[i]);
    }

    this.posn = this.ps.getPosn();
  };

  _proto4.compute_lm = function compute_lm(v, u, postAction) {
    var _this = this;

    var dfdv = v.dfdv();
    v.visitNeighbours(u, function (c, next) {
      var _dfdv = _this.compute_lm(next, v, postAction);

      if (next === c.right) {
        dfdv += _dfdv * c.left.scale;
        c.lm = _dfdv;
      } else {
        dfdv += _dfdv * c.right.scale;
        c.lm = -_dfdv;
      }

      postAction(c);
    });
    return dfdv / v.scale;
  };

  _proto4.populateSplitBlock = function populateSplitBlock(v, prev) {
    var _this2 = this;

    v.visitNeighbours(prev, function (c, next) {
      next.offset = v.offset + (next === c.right ? c.gap : -c.gap);

      _this2.addVariable(next);

      _this2.populateSplitBlock(next, v);
    });
  } // traverse the active constraint tree applying visit to each active constraint
  ;

  _proto4.traverse = function traverse(visit, acc, v, prev) {
    var _this3 = this;

    if (v === void 0) {
      v = this.vars[0];
    }

    if (prev === void 0) {
      prev = null;
    }

    v.visitNeighbours(prev, function (c, next) {
      acc.push(visit(c));

      _this3.traverse(visit, acc, next, v);
    });
  } // calculate lagrangian multipliers on constraints and
  // find the active constraint in this block with the smallest lagrangian.
  // if the lagrangian is negative, then the constraint is a split candidate.
  ;

  _proto4.findMinLM = function findMinLM() {
    var m = null;
    this.compute_lm(this.vars[0], null, function (c) {
      if (!c.equality && (m === null || c.lm < m.lm)) m = c;
    });
    return m;
  };

  _proto4.findMinLMBetween = function findMinLMBetween(lv, rv) {
    this.compute_lm(lv, null, function () {});
    var m = null;
    this.findPath(lv, null, rv, function (c, next) {
      if (!c.equality && c.right === next && (m === null || c.lm < m.lm)) m = c;
    });
    return m;
  };

  _proto4.findPath = function findPath(v, prev, to, visit) {
    var _this4 = this;

    var endFound = false;
    v.visitNeighbours(prev, function (c, next) {
      if (!endFound && (next === to || _this4.findPath(next, v, to, visit))) {
        endFound = true;
        visit(c, next);
      }
    });
    return endFound;
  } // Search active constraint tree from u to see if there is a directed path to v.
  // Returns true if path is found.
  ;

  _proto4.isActiveDirectedPathBetween = function isActiveDirectedPathBetween(u, v) {
    if (u === v) return true;
    var i = u.cOut.length;

    while (i--) {
      var c = u.cOut[i];
      if (c.active && this.isActiveDirectedPathBetween(c.right, v)) return true;
    }

    return false;
  } // split the block into two by deactivating the specified constraint
  ;

  Block.split = function split(c) {
    /* DEBUG
                console.log("split on " + c);
                console.assert(c.active, "attempt to split on inactive constraint");
    DEBUG */
    c.active = false;
    return [Block.createSplitBlock(c.left), Block.createSplitBlock(c.right)];
  };

  Block.createSplitBlock = function createSplitBlock(startVar) {
    var b = new Block(startVar);
    b.populateSplitBlock(startVar, null);
    return b;
  } // find a split point somewhere between the specified variables
  ;

  _proto4.splitBetween = function splitBetween(vl, vr) {
    /* DEBUG
                console.assert(vl.block === this);
                console.assert(vr.block === this);
    DEBUG */
    var c = this.findMinLMBetween(vl, vr);

    if (c !== null) {
      var bs = Block.split(c);
      return {
        constraint: c,
        lb: bs[0],
        rb: bs[1]
      };
    } // couldn't find a split point - for example the active path is all equality constraints


    return null;
  };

  _proto4.mergeAcross = function mergeAcross(b, c, dist) {
    c.active = true;

    for (var i = 0, n = b.vars.length; i < n; ++i) {
      var v = b.vars[i];
      v.offset += dist;
      this.addVariable(v);
    }

    this.posn = this.ps.getPosn();
  };

  _proto4.cost = function cost() {
    var sum = 0,
        i = this.vars.length;

    while (i--) {
      var v = this.vars[i],
          d = v.position() - v.desiredPosition;
      sum += d * d * v.weight;
    }

    return sum;
  };

  return Block;
}();
var Blocks = /*#__PURE__*/function () {
  function Blocks(vs) {
    this.vs = vs;
    var n = vs.length;
    this.list = new Array(n);

    while (n--) {
      var b = new Block(vs[n]);
      this.list[n] = b;
      b.blockInd = n;
    }
  }

  var _proto5 = Blocks.prototype;

  _proto5.cost = function cost() {
    var sum = 0,
        i = this.list.length;

    while (i--) {
      sum += this.list[i].cost();
    }

    return sum;
  };

  _proto5.insert = function insert(b) {
    /* DEBUG
                console.assert(!this.contains(b), "blocks error: tried to reinsert block " + b.blockInd)
    DEBUG */
    b.blockInd = this.list.length;
    this.list.push(b);
    /* DEBUG
                console.log("insert block: " + b.blockInd);
                this.contains(b);
    DEBUG */
  };

  _proto5.remove = function remove(b) {
    /* DEBUG
                console.log("remove block: " + b.blockInd);
                console.assert(this.contains(b));
    DEBUG */
    var last = this.list.length - 1;
    var swapBlock = this.list[last];
    this.list.length = last;

    if (b !== swapBlock) {
      this.list[b.blockInd] = swapBlock;
      swapBlock.blockInd = b.blockInd;
      /* DEBUG
                      console.assert(this.contains(swapBlock));
      DEBUG */
    }
  } // merge the blocks on either side of the specified constraint, by copying the smaller block into the larger
  // and deleting the smaller.
  ;

  _proto5.merge = function merge(c) {
    var l = c.left.block,
        r = c.right.block;
    /* DEBUG
                console.assert(l!==r, "attempt to merge within the same block");
    DEBUG */

    var dist = c.right.offset - c.left.offset - c.gap;

    if (l.vars.length < r.vars.length) {
      r.mergeAcross(l, c, dist);
      this.remove(l);
    } else {
      l.mergeAcross(r, c, -dist);
      this.remove(r);
    }
    /* DEBUG
                console.assert(Math.abs(c.slack()) < 1e-6, "Error: Constraint should be at equality after merge!");
                console.log("merged on " + c);
    DEBUG */

  };

  _proto5.forEach = function forEach(f) {
    this.list.forEach(f);
  } // useful, for example, after variable desired positions change.
  ;

  _proto5.updateBlockPositions = function updateBlockPositions() {
    this.list.forEach(function (b) {
      return b.updateWeightedPosition();
    });
  } // split each block across its constraint with the minimum lagrangian
  ;

  _proto5.split = function split(inactive) {
    var _this5 = this;

    this.updateBlockPositions();
    this.list.forEach(function (b) {
      var v = b.findMinLM();

      if (v !== null && v.lm < Solver.LAGRANGIAN_TOLERANCE) {
        b = v.left.block;
        Block.split(v).forEach(function (nb) {
          return _this5.insert(nb);
        });

        _this5.remove(b);

        inactive.push(v);
        /* DEBUG
                            console.assert(this.contains(v.left.block));
                            console.assert(this.contains(v.right.block));
        DEBUG */
      }
    });
  };

  return Blocks;
}();
var Solver = /*#__PURE__*/function () {
  function Solver(vs, cs) {
    this.vs = vs;
    this.cs = cs;
    this.vs = vs;
    vs.forEach(function (v) {
      v.cIn = [], v.cOut = [];
      /* DEBUG
                      v.toString = () => "v" + vs.indexOf(v);
      DEBUG */
    });
    this.cs = cs;
    cs.forEach(function (c) {
      c.left.cOut.push(c);
      c.right.cIn.push(c);
      /* DEBUG
                      c.toString = () => c.left + "+" + c.gap + "<=" + c.right + " slack=" + c.slack() + " active=" + c.active;
      DEBUG */
    });
    this.inactive = cs.map(function (c) {
      c.active = false;
      return c;
    });
    this.bs = null;
  }

  var _proto6 = Solver.prototype;

  _proto6.cost = function cost() {
    return this.bs.cost();
  } // set starting positions without changing desired positions.
  // Note: it throws away any previous block structure.
  ;

  _proto6.setStartingPositions = function setStartingPositions(ps) {
    this.inactive = this.cs.map(function (c) {
      c.active = false;
      return c;
    });
    this.bs = new Blocks(this.vs);
    this.bs.forEach(function (b, i) {
      return b.posn = ps[i];
    });
  };

  _proto6.setDesiredPositions = function setDesiredPositions(ps) {
    this.vs.forEach(function (v, i) {
      return v.desiredPosition = ps[i];
    });
  }
  /* DEBUG
          private getId(v: Variable): number {
              return this.vs.indexOf(v);
          }
  
          // sanity check of the index integrity of the inactive list
          checkInactive(): void {
              var inactiveCount = 0;
              this.cs.forEach(c=> {
                  var i = this.inactive.indexOf(c);
                  console.assert(!c.active && i >= 0 || c.active && i < 0, "constraint should be in the inactive list if it is not active: " + c);
                  if (i >= 0) {
                      inactiveCount++;
                  } else {
                      console.assert(c.active, "inactive constraint not found in inactive list: " + c);
                  }
              });
              console.assert(inactiveCount === this.inactive.length, inactiveCount + " inactive constraints found, " + this.inactive.length + "in inactive list");
          }
          // after every call to satisfy the following should check should pass
          checkSatisfied(): void {
              this.cs.forEach(c=>console.assert(c.slack() >= vpsc.Solver.ZERO_UPPERBOUND, "Error: Unsatisfied constraint! "+c));
          }
  DEBUG */
  ;

  _proto6.mostViolated = function mostViolated() {
    var minSlack = Number.MAX_VALUE,
        v = null,
        l = this.inactive,
        n = l.length,
        deletePoint = n;

    for (var i = 0; i < n; ++i) {
      var c = l[i];
      if (c.unsatisfiable) continue;
      var slack = c.slack();

      if (c.equality || slack < minSlack) {
        minSlack = slack;
        v = c;
        deletePoint = i;
        if (c.equality) break;
      }
    }

    if (deletePoint !== n && (minSlack < Solver.ZERO_UPPERBOUND && !v.active || v.equality)) {
      l[deletePoint] = l[n - 1];
      l.length = n - 1;
    }

    return v;
  } // satisfy constraints by building block structure over violated constraints
  // and moving the blocks to their desired positions
  ;

  _proto6.satisfy = function satisfy() {
    if (this.bs == null) {
      this.bs = new Blocks(this.vs);
    }
    /* DEBUG
                console.log("satisfy: " + this.bs);
    DEBUG */


    this.bs.split(this.inactive);
    var v = null;

    while ((v = this.mostViolated()) && (v.equality || v.slack() < Solver.ZERO_UPPERBOUND && !v.active)) {
      var lb = v.left.block,
          rb = v.right.block;
      /* DEBUG
                      console.log("most violated is: " + v);
                      this.bs.contains(lb);
                      this.bs.contains(rb);
      DEBUG */

      if (lb !== rb) {
        this.bs.merge(v);
      } else {
        if (lb.isActiveDirectedPathBetween(v.right, v.left)) {
          // cycle found!
          v.unsatisfiable = true;
          continue;
        } // constraint is within block, need to split first


        var split = lb.splitBetween(v.left, v.right);

        if (split !== null) {
          this.bs.insert(split.lb);
          this.bs.insert(split.rb);
          this.bs.remove(lb);
          this.inactive.push(split.constraint);
        } else {
          /* DEBUG
                                  console.log("unsatisfiable constraint found");
          DEBUG */
          v.unsatisfiable = true;
          continue;
        }

        if (v.slack() >= 0) {
          /* DEBUG
                                  console.log("violated constraint indirectly satisfied: " + v);
          DEBUG */
          // v was satisfied by the above split!
          this.inactive.push(v);
        } else {
          /* DEBUG
                                  console.log("merge after split:");
          DEBUG */
          this.bs.merge(v);
        }
      }
      /* DEBUG
                      this.bs.contains(v.left.block);
                      this.bs.contains(v.right.block);
                      this.checkInactive();
      DEBUG */

    }
    /* DEBUG
                this.checkSatisfied();
    DEBUG */

  } // repeatedly build and split block structure until we converge to an optimal solution
  ;

  _proto6.solve = function solve() {
    this.satisfy();
    var lastcost = Number.MAX_VALUE,
        cost = this.bs.cost();

    while (Math.abs(lastcost - cost) > 0.0001) {
      this.satisfy();
      lastcost = cost;
      cost = this.bs.cost();
    }

    return cost;
  };

  return Solver;
}();
Solver.LAGRANGIAN_TOLERANCE = -1e-4;
Solver.ZERO_UPPERBOUND = -1e-10;
/**
  * Remove overlap between spans while keeping their centers as close as possible to the specified desiredCenters.
  * Lower and upper bounds will be respected if the spans physically fit between them
  * (otherwise they'll be moved and their new position returned).
  * If no upper/lower bound is specified then the bounds of the moved spans will be returned.
  * returns a new center for each span.
  */

function removeOverlapInOneDimension(spans, lowerBound, upperBound) {
  var vs = spans.map(function (s) {
    return new Variable(s.desiredCenter);
  });
  var cs = [];
  var n = spans.length;

  for (var i = 0; i < n - 1; i++) {
    var left = spans[i],
        right = spans[i + 1];
    cs.push(new Constraint(vs[i], vs[i + 1], (left.size + right.size) / 2));
  }

  var leftMost = vs[0],
      rightMost = vs[n - 1],
      leftMostSize = spans[0].size / 2,
      rightMostSize = spans[n - 1].size / 2;
  var vLower = null,
      vUpper = null;

  if (lowerBound) {
    vLower = new Variable(lowerBound, leftMost.weight * 1000);
    vs.push(vLower);
    cs.push(new Constraint(vLower, leftMost, leftMostSize));
  }

  if (upperBound) {
    vUpper = new Variable(upperBound, rightMost.weight * 1000);
    vs.push(vUpper);
    cs.push(new Constraint(rightMost, vUpper, rightMostSize));
  }

  var solver = new Solver(vs, cs);
  solver.solve();
  return {
    newCenters: vs.slice(0, spans.length).map(function (v) {
      return v.position();
    }),
    lowerBound: vLower ? vLower.position() : leftMost.position() - leftMostSize,
    upperBound: vUpper ? vUpper.position() : rightMost.position() + rightMostSize
  };
}

//Based on js_es:
//
//https://github.com/vadimg/js_bintrees
//
//Copyright (C) 2011 by Vadim Graboys
//
//Permission is hereby granted, free of charge, to any person obtaining a copy
//of this software and associated documentation files (the "Software"), to deal
//in the Software without restriction, including without limitation the rights
//to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
//copies of the Software, and to permit persons to whom the Software is
//furnished to do so, subject to the following conditions:
//
//The above copyright notice and this permission notice shall be included in
//all copies or substantial portions of the Software.
//
//THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
//IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
//AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
//OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
//THE SOFTWARE.
var TreeBase = /*#__PURE__*/function () {
  function TreeBase() {
    // returns iterator to node if found, null otherwise
    this.findIter = function (data) {
      var res = this._root;
      var iter = this.iterator();

      while (res !== null) {
        var c = this._comparator(data, res.data);

        if (c === 0) {
          iter._cursor = res;
          return iter;
        } else {
          iter._ancestors.push(res);

          res = res.get_child(c > 0);
        }
      }

      return null;
    };
  } // removes all nodes from the tree


  var _proto = TreeBase.prototype;

  _proto.clear = function clear() {
    this._root = null;
    this.size = 0;
  };

  // returns node data if found, null otherwise
  _proto.find = function find(data) {
    var res = this._root;

    while (res !== null) {
      var c = this._comparator(data, res.data);

      if (c === 0) {
        return res.data;
      } else {
        res = res.get_child(c > 0);
      }
    }

    return null;
  };

  // Returns an interator to the tree node immediately before (or at) the element
  _proto.lowerBound = function lowerBound(data) {
    return this._bound(data, this._comparator);
  };

  // Returns an interator to the tree node immediately after (or at) the element
  _proto.upperBound = function upperBound(data) {
    var cmp = this._comparator;

    function reverse_cmp(a, b) {
      return cmp(b, a);
    }

    return this._bound(data, reverse_cmp);
  };

  // returns null if tree is empty
  _proto.min = function min() {
    var res = this._root;

    if (res === null) {
      return null;
    }

    while (res.left !== null) {
      res = res.left;
    }

    return res.data;
  };

  // returns null if tree is empty
  _proto.max = function max() {
    var res = this._root;

    if (res === null) {
      return null;
    }

    while (res.right !== null) {
      res = res.right;
    }

    return res.data;
  };

  // returns a null iterator
  // call next() or prev() to point to an element
  _proto.iterator = function iterator() {
    return new Iterator(this);
  };

  // calls cb on each node's data, in order
  _proto.each = function each(cb) {
    var it = this.iterator(),
        data;

    while ((data = it.next()) !== null) {
      cb(data);
    }
  };

  // calls cb on each node's data, in reverse order
  _proto.reach = function reach(cb) {
    var it = this.iterator(),
        data;

    while ((data = it.prev()) !== null) {
      cb(data);
    }
  };

  // used for lowerBound and upperBound
  _proto._bound = function _bound(data, cmp) {
    var cur = this._root;
    var iter = this.iterator();

    while (cur !== null) {
      var c = this._comparator(data, cur.data);

      if (c === 0) {
        iter._cursor = cur;
        return iter;
      }

      iter._ancestors.push(cur);

      cur = cur.get_child(c > 0);
    }

    for (var i = iter._ancestors.length - 1; i >= 0; --i) {
      cur = iter._ancestors[i];

      if (cmp(data, cur.data) > 0) {
        iter._cursor = cur;
        iter._ancestors.length = i;
        return iter;
      }
    }

    iter._ancestors.length = 0;
    return iter;
  };

  return TreeBase;
}();
var Iterator = /*#__PURE__*/function () {
  function Iterator(tree) {
    this._tree = tree;
    this._ancestors = [];
    this._cursor = null;
  }

  var _proto2 = Iterator.prototype;

  _proto2.data = function data() {
    return this._cursor !== null ? this._cursor.data : null;
  };

  // if null-iterator, returns first node
  // otherwise, returns next node
  _proto2.next = function next() {
    if (this._cursor === null) {
      var root = this._tree._root;

      if (root !== null) {
        this._minNode(root);
      }
    } else {
      if (this._cursor.right === null) {
        // no greater node in subtree, go up to parent
        // if coming from a right child, continue up the stack
        var save;

        do {
          save = this._cursor;

          if (this._ancestors.length) {
            this._cursor = this._ancestors.pop();
          } else {
            this._cursor = null;
            break;
          }
        } while (this._cursor.right === save);
      } else {
        // get the next node from the subtree
        this._ancestors.push(this._cursor);

        this._minNode(this._cursor.right);
      }
    }

    return this._cursor !== null ? this._cursor.data : null;
  };

  // if null-iterator, returns last node
  // otherwise, returns previous node
  _proto2.prev = function prev() {
    if (this._cursor === null) {
      var root = this._tree._root;

      if (root !== null) {
        this._maxNode(root);
      }
    } else {
      if (this._cursor.left === null) {
        var save;

        do {
          save = this._cursor;

          if (this._ancestors.length) {
            this._cursor = this._ancestors.pop();
          } else {
            this._cursor = null;
            break;
          }
        } while (this._cursor.left === save);
      } else {
        this._ancestors.push(this._cursor);

        this._maxNode(this._cursor.left);
      }
    }

    return this._cursor !== null ? this._cursor.data : null;
  };

  _proto2._minNode = function _minNode(start) {
    while (start.left !== null) {
      this._ancestors.push(start);

      start = start.left;
    }

    this._cursor = start;
  };

  _proto2._maxNode = function _maxNode(start) {
    while (start.right !== null) {
      this._ancestors.push(start);

      start = start.right;
    }

    this._cursor = start;
  };

  return Iterator;
}();

var Node = /*#__PURE__*/function () {
  function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
    this.red = true;
  }

  var _proto3 = Node.prototype;

  _proto3.get_child = function get_child(dir) {
    return dir ? this.right : this.left;
  };

  _proto3.set_child = function set_child(dir, val) {
    if (dir) {
      this.right = val;
    } else {
      this.left = val;
    }
  };

  return Node;
}();

var RBTree = /*#__PURE__*/function (_TreeBase) {
  _inheritsLoose(RBTree, _TreeBase);

  function RBTree(comparator) {
    var _this;

    _this = _TreeBase.call(this) || this;
    _this._root = null;
    _this._comparator = comparator;
    _this.size = 0;
    return _this;
  } // returns true if inserted, false if duplicate


  var _proto4 = RBTree.prototype;

  _proto4.insert = function insert(data) {
    var ret = false;

    if (this._root === null) {
      // empty tree
      this._root = new Node(data);
      ret = true;
      this.size++;
    } else {
      var head = new Node(undefined); // fake tree root

      var dir = false;
      var last = false; // setup

      var gp = null; // grandparent

      var ggp = head; // grand-grand-parent

      var p = null; // parent

      var node = this._root;
      ggp.right = this._root; // search down

      while (true) {
        if (node === null) {
          // insert new node at the bottom
          node = new Node(data);
          p.set_child(dir, node);
          ret = true;
          this.size++;
        } else if (RBTree.is_red(node.left) && RBTree.is_red(node.right)) {
          // color flip
          node.red = true;
          node.left.red = false;
          node.right.red = false;
        } // fix red violation


        if (RBTree.is_red(node) && RBTree.is_red(p)) {
          var dir2 = ggp.right === gp;

          if (node === p.get_child(last)) {
            ggp.set_child(dir2, RBTree.single_rotate(gp, !last));
          } else {
            ggp.set_child(dir2, RBTree.double_rotate(gp, !last));
          }
        }

        var cmp = this._comparator(node.data, data); // stop if found


        if (cmp === 0) {
          break;
        }

        last = dir;
        dir = cmp < 0; // update helpers

        if (gp !== null) {
          ggp = gp;
        }

        gp = p;
        p = node;
        node = node.get_child(dir);
      } // update root


      this._root = head.right;
    } // make root black


    this._root.red = false;
    return ret;
  };

  // returns true if removed, false if not found
  _proto4.remove = function remove(data) {
    if (this._root === null) {
      return false;
    }

    var head = new Node(undefined); // fake tree root

    var node = head;
    node.right = this._root;
    var p = null; // parent

    var gp = null; // grand parent

    var found = null; // found item

    var dir = true;

    while (node.get_child(dir) !== null) {
      var last = dir; // update helpers

      gp = p;
      p = node;
      node = node.get_child(dir);

      var cmp = this._comparator(data, node.data);

      dir = cmp > 0; // save found node

      if (cmp === 0) {
        found = node;
      } // push the red node down


      if (!RBTree.is_red(node) && !RBTree.is_red(node.get_child(dir))) {
        if (RBTree.is_red(node.get_child(!dir))) {
          var sr = RBTree.single_rotate(node, dir);
          p.set_child(last, sr);
          p = sr;
        } else if (!RBTree.is_red(node.get_child(!dir))) {
          var sibling = p.get_child(!last);

          if (sibling !== null) {
            if (!RBTree.is_red(sibling.get_child(!last)) && !RBTree.is_red(sibling.get_child(last))) {
              // color flip
              p.red = false;
              sibling.red = true;
              node.red = true;
            } else {
              var dir2 = gp.right === p;

              if (RBTree.is_red(sibling.get_child(last))) {
                gp.set_child(dir2, RBTree.double_rotate(p, last));
              } else if (RBTree.is_red(sibling.get_child(!last))) {
                gp.set_child(dir2, RBTree.single_rotate(p, last));
              } // ensure correct coloring


              var gpc = gp.get_child(dir2);
              gpc.red = true;
              node.red = true;
              gpc.left.red = false;
              gpc.right.red = false;
            }
          }
        }
      }
    } // replace and remove if found


    if (found !== null) {
      found.data = node.data;
      p.set_child(p.right === node, node.get_child(node.left === null));
      this.size--;
    } // update root and make it black


    this._root = head.right;

    if (this._root !== null) {
      this._root.red = false;
    }

    return found !== null;
  };

  RBTree.is_red = function is_red(node) {
    return node !== null && node.red;
  };

  RBTree.single_rotate = function single_rotate(root, dir) {
    var save = root.get_child(!dir);
    root.set_child(!dir, save.get_child(dir));
    save.set_child(dir, root);
    root.red = true;
    save.red = false;
    return save;
  };

  RBTree.double_rotate = function double_rotate(root, dir) {
    root.set_child(!dir, RBTree.single_rotate(root.get_child(!dir), !dir));
    return RBTree.single_rotate(root, dir);
  };

  return RBTree;
}(TreeBase);

function computeGroupBounds(g) {
  g.bounds = typeof g.leaves !== "undefined" ? g.leaves.reduce(function (r, c) {
    return c.bounds.union(r);
  }, Rectangle.empty()) : Rectangle.empty();
  if (typeof g.groups !== "undefined") g.bounds = g.groups.reduce(function (r, c) {
    return computeGroupBounds(c).union(r);
  }, g.bounds);
  g.bounds = g.bounds.inflate(g.padding);
  return g.bounds;
}
var Rectangle = /*#__PURE__*/function () {
  function Rectangle(x, X, y, Y) {
    this.x = x;
    this.X = X;
    this.y = y;
    this.Y = Y;
  }

  Rectangle.empty = function empty() {
    return new Rectangle(Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY);
  };

  var _proto = Rectangle.prototype;

  _proto.cx = function cx() {
    return (this.x + this.X) / 2;
  };

  _proto.cy = function cy() {
    return (this.y + this.Y) / 2;
  };

  _proto.overlapX = function overlapX(r) {
    var ux = this.cx(),
        vx = r.cx();
    if (ux <= vx && r.x < this.X) return this.X - r.x;
    if (vx <= ux && this.x < r.X) return r.X - this.x;
    return 0;
  };

  _proto.overlapY = function overlapY(r) {
    var uy = this.cy(),
        vy = r.cy();
    if (uy <= vy && r.y < this.Y) return this.Y - r.y;
    if (vy <= uy && this.y < r.Y) return r.Y - this.y;
    return 0;
  };

  _proto.setXCentre = function setXCentre(cx) {
    var dx = cx - this.cx();
    this.x += dx;
    this.X += dx;
  };

  _proto.setYCentre = function setYCentre(cy) {
    var dy = cy - this.cy();
    this.y += dy;
    this.Y += dy;
  };

  _proto.width = function width() {
    return this.X - this.x;
  };

  _proto.height = function height() {
    return this.Y - this.y;
  };

  _proto.union = function union(r) {
    return new Rectangle(Math.min(this.x, r.x), Math.max(this.X, r.X), Math.min(this.y, r.y), Math.max(this.Y, r.Y));
  }
  /**
   * return any intersection points between the given line and the sides of this rectangle
   * @method lineIntersection
   * @param x1 number first x coord of line
   * @param y1 number first y coord of line
   * @param x2 number second x coord of line
   * @param y2 number second y coord of line
   * @return any intersection points found
   */
  ;

  _proto.lineIntersections = function lineIntersections(x1, y1, x2, y2) {
    var sides = [[this.x, this.y, this.X, this.y], [this.X, this.y, this.X, this.Y], [this.X, this.Y, this.x, this.Y], [this.x, this.Y, this.x, this.y]];
    var intersections = [];

    for (var i = 0; i < 4; ++i) {
      var r = Rectangle.lineIntersection(x1, y1, x2, y2, sides[i][0], sides[i][1], sides[i][2], sides[i][3]);
      if (r !== null) intersections.push({
        x: r.x,
        y: r.y
      });
    }

    return intersections;
  }
  /**
   * return any intersection points between a line extending from the centre of this rectangle to the given point,
   *  and the sides of this rectangle
   * @method lineIntersection
   * @param x2 number second x coord of line
   * @param y2 number second y coord of line
   * @return any intersection points found
   */
  ;

  _proto.rayIntersection = function rayIntersection(x2, y2) {
    var ints = this.lineIntersections(this.cx(), this.cy(), x2, y2);
    return ints.length > 0 ? ints[0] : null;
  };

  _proto.vertices = function vertices() {
    return [{
      x: this.x,
      y: this.y
    }, {
      x: this.X,
      y: this.y
    }, {
      x: this.X,
      y: this.Y
    }, {
      x: this.x,
      y: this.Y
    }];
  };

  Rectangle.lineIntersection = function lineIntersection(x1, y1, x2, y2, x3, y3, x4, y4) {
    var dx12 = x2 - x1,
        dx34 = x4 - x3,
        dy12 = y2 - y1,
        dy34 = y4 - y3,
        denominator = dy34 * dx12 - dx34 * dy12;
    if (denominator == 0) return null;
    var dx31 = x1 - x3,
        dy31 = y1 - y3,
        numa = dx34 * dy31 - dy34 * dx31,
        a = numa / denominator,
        numb = dx12 * dy31 - dy12 * dx31,
        b = numb / denominator;

    if (a >= 0 && a <= 1 && b >= 0 && b <= 1) {
      return {
        x: x1 + a * dx12,
        y: y1 + a * dy12
      };
    }

    return null;
  };

  _proto.inflate = function inflate(pad) {
    return new Rectangle(this.x - pad, this.X + pad, this.y - pad, this.Y + pad);
  };

  return Rectangle;
}();
/**
 * Returns the endpoints of a line that connects the centre of two rectangles.
 * @param {Rectangle} [source] The source Rectangle.
 * @param {Rectangle} [target] The target Rectangle.
 * @param {number} [ah] The size of the arrow head, a distance to shorten the
 *                      line by.
 * @return An object with three point properties, the intersection with the
 *         source rectangle (sourceIntersection), the intersection with then
 *         target rectangle (targetIntersection), and the point an arrow
 *         head of the specified size would need to start (arrowStart).
 */

function makeEdgeBetween(source, target, ah) {
  var si = source.rayIntersection(target.cx(), target.cy()) || {
    x: source.cx(),
    y: source.cy()
  },
      ti = target.rayIntersection(source.cx(), source.cy()) || {
    x: target.cx(),
    y: target.cy()
  },
      dx = ti.x - si.x,
      dy = ti.y - si.y,
      l = Math.sqrt(dx * dx + dy * dy),
      al = l - ah;
  return {
    sourceIntersection: si,
    targetIntersection: ti,
    arrowStart: {
      x: si.x + al * dx / l,
      y: si.y + al * dy / l
    }
  };
}
/**
 * Returns the intersection of a line from the given point to the centre
 * of the target rectangle where it intersects the rectanngle.
 * @param [source] The source point.
 * @param {Rectangle} [target] The target Rectangle.
 * @param {number} [ah] The size of the arrow head, a distance to shorten the
 *                      line by.
 * @return The point an arrow head of the specified size would need to start.
 */

function makeEdgeTo(s, target, ah) {
  var ti = target.rayIntersection(s.x, s.y);
  if (!ti) ti = {
    x: target.cx(),
    y: target.cy()
  };
  var dx = ti.x - s.x,
      dy = ti.y - s.y,
      l = Math.sqrt(dx * dx + dy * dy);
  return {
    x: ti.x - ah * dx / l,
    y: ti.y - ah * dy / l
  };
}

var Node$1 = function Node(v, r, pos) {
  this.v = v;
  this.r = r;
  this.pos = pos;
  this.prev = makeRBTree();
  this.next = makeRBTree();
};

var Event = function Event(isOpen, v, pos) {
  this.isOpen = isOpen;
  this.v = v;
  this.pos = pos;
};

function compareEvents(a, b) {
  if (a.pos > b.pos) {
    return 1;
  }

  if (a.pos < b.pos) {
    return -1;
  }

  if (a.isOpen) {
    // open must come before close
    return -1;
  }

  if (b.isOpen) {
    // open must come before close
    return 1;
  }

  return 0;
}

function makeRBTree() {
  return new RBTree(function (a, b) {
    return a.pos - b.pos;
  });
}

var xRect = {
  getCentre: function getCentre(r) {
    return r.cx();
  },
  getOpen: function getOpen(r) {
    return r.y;
  },
  getClose: function getClose(r) {
    return r.Y;
  },
  getSize: function getSize(r) {
    return r.width();
  },
  makeRect: function makeRect(open, close, center, size) {
    return new Rectangle(center - size / 2, center + size / 2, open, close);
  },
  findNeighbours: findXNeighbours
};
var yRect = {
  getCentre: function getCentre(r) {
    return r.cy();
  },
  getOpen: function getOpen(r) {
    return r.x;
  },
  getClose: function getClose(r) {
    return r.X;
  },
  getSize: function getSize(r) {
    return r.height();
  },
  makeRect: function makeRect(open, close, center, size) {
    return new Rectangle(open, close, center - size / 2, center + size / 2);
  },
  findNeighbours: findYNeighbours
};

function generateGroupConstraints(root, f, minSep, isContained) {
  if (isContained === void 0) {
    isContained = false;
  }

  var padding = root.padding,
      gn = typeof root.groups !== 'undefined' ? root.groups.length : 0,
      ln = typeof root.leaves !== 'undefined' ? root.leaves.length : 0,
      childConstraints = !gn ? [] : root.groups.reduce(function (ccs, g) {
    return ccs.concat(generateGroupConstraints(g, f, minSep, true));
  }, []),
      n = (isContained ? 2 : 0) + ln + gn,
      vs = new Array(n),
      rs = new Array(n),
      i = 0,
      add = function add(r, v) {
    rs[i] = r;
    vs[i++] = v;
  };

  if (isContained) {
    // if this group is contained by another, then we add two dummy vars and rectangles for the borders
    var b = root.bounds,
        c = f.getCentre(b),
        s = f.getSize(b) / 2,
        open = f.getOpen(b),
        close = f.getClose(b),
        min = c - s + padding / 2,
        max = c + s - padding / 2;
    root.minVar.desiredPosition = min;
    add(f.makeRect(open, close, min, padding), root.minVar);
    root.maxVar.desiredPosition = max;
    add(f.makeRect(open, close, max, padding), root.maxVar);
  }

  if (ln) root.leaves.forEach(function (l) {
    return add(l.bounds, l.variable);
  });
  if (gn) root.groups.forEach(function (g) {
    var b = g.bounds;
    add(f.makeRect(f.getOpen(b), f.getClose(b), f.getCentre(b), f.getSize(b)), g.minVar);
  });
  var cs = generateConstraints(rs, vs, f, minSep);

  if (gn) {
    vs.forEach(function (v) {
      v.cOut = [], v.cIn = [];
    });
    cs.forEach(function (c) {
      c.left.cOut.push(c), c.right.cIn.push(c);
    });
    root.groups.forEach(function (g) {
      var gapAdjustment = (g.padding - f.getSize(g.bounds)) / 2;
      g.minVar.cIn.forEach(function (c) {
        return c.gap += gapAdjustment;
      });
      g.minVar.cOut.forEach(function (c) {
        c.left = g.maxVar;
        c.gap += gapAdjustment;
      });
    });
  }

  return childConstraints.concat(cs);
}

function generateConstraints(rs, vars, rect, minSep) {
  var i,
      n = rs.length;
  var N = 2 * n;
  console.assert(vars.length >= n);
  var events = new Array(N);

  for (i = 0; i < n; ++i) {
    var r = rs[i];
    var v = new Node$1(vars[i], r, rect.getCentre(r));
    events[i] = new Event(true, v, rect.getOpen(r));
    events[i + n] = new Event(false, v, rect.getClose(r));
  }

  events.sort(compareEvents);
  var cs = new Array();
  var scanline = makeRBTree();

  for (i = 0; i < N; ++i) {
    var e = events[i];
    var v = e.v;

    if (e.isOpen) {
      scanline.insert(v);
      rect.findNeighbours(v, scanline);
    } else {
      // close event
      scanline.remove(v);

      var makeConstraint = function makeConstraint(l, r) {
        var sep = (rect.getSize(l.r) + rect.getSize(r.r)) / 2 + minSep;
        cs.push(new Constraint(l.v, r.v, sep));
      };

      var visitNeighbours = function visitNeighbours(forward, reverse, mkcon) {
        var u,
            it = v[forward].iterator();

        while ((u = it[forward]()) !== null) {
          mkcon(u, v);
          u[reverse].remove(v);
        }
      };

      visitNeighbours("prev", "next", function (u, v) {
        return makeConstraint(u, v);
      });
      visitNeighbours("next", "prev", function (u, v) {
        return makeConstraint(v, u);
      });
    }
  }

  console.assert(scanline.size === 0);
  return cs;
}

function findXNeighbours(v, scanline) {
  var f = function f(forward, reverse) {
    var it = scanline.findIter(v);
    var u;

    while ((u = it[forward]()) !== null) {
      var uovervX = u.r.overlapX(v.r);

      if (uovervX <= 0 || uovervX <= u.r.overlapY(v.r)) {
        v[forward].insert(u);
        u[reverse].insert(v);
      }

      if (uovervX <= 0) {
        break;
      }
    }
  };

  f("next", "prev");
  f("prev", "next");
}

function findYNeighbours(v, scanline) {
  var f = function f(forward, reverse) {
    var u = scanline.findIter(v)[forward]();

    if (u !== null && u.r.overlapX(v.r) > 0) {
      v[forward].insert(u);
      u[reverse].insert(v);
    }
  };

  f("next", "prev");
  f("prev", "next");
}

function generateXConstraints(rs, vars) {
  return generateConstraints(rs, vars, xRect, 1e-6);
}
function generateYConstraints(rs, vars) {
  return generateConstraints(rs, vars, yRect, 1e-6);
}
function generateXGroupConstraints(root) {
  return generateGroupConstraints(root, xRect, 1e-6);
}
function generateYGroupConstraints(root) {
  return generateGroupConstraints(root, yRect, 1e-6);
}
function removeOverlaps(rs) {
  var vs = rs.map(function (r) {
    return new Variable(r.cx());
  });
  var cs = generateXConstraints(rs, vs);
  var solver = new Solver(vs, cs);
  solver.solve();
  vs.forEach(function (v, i) {
    return rs[i].setXCentre(v.position());
  });
  vs = rs.map(function (r) {
    return new Variable(r.cy());
  });
  cs = generateYConstraints(rs, vs);
  solver = new Solver(vs, cs);
  solver.solve();
  vs.forEach(function (v, i) {
    return rs[i].setYCentre(v.position());
  });
}
var IndexedVariable = /*#__PURE__*/function (_Variable) {
  _inheritsLoose(IndexedVariable, _Variable);

  function IndexedVariable(index, w) {
    var _this;

    _this = _Variable.call(this, 0, w) || this;
    _this.index = index;
    return _this;
  }

  return IndexedVariable;
}(Variable);
var Projection = /*#__PURE__*/function () {
  function Projection(nodes, groups, rootGroup, constraints, avoidOverlaps) {
    var _this2 = this;

    if (rootGroup === void 0) {
      rootGroup = null;
    }

    if (constraints === void 0) {
      constraints = null;
    }

    if (avoidOverlaps === void 0) {
      avoidOverlaps = false;
    }

    this.nodes = nodes;
    this.groups = groups;
    this.rootGroup = rootGroup;
    this.avoidOverlaps = avoidOverlaps;
    this.variables = nodes.map(function (v, i) {
      return v.variable = new IndexedVariable(i, 1);
    });
    if (constraints) this.createConstraints(constraints);

    if (avoidOverlaps && rootGroup && typeof rootGroup.groups !== 'undefined') {
      nodes.forEach(function (v) {
        if (!v.width || !v.height) {
          //If undefined, default to nothing
          v.bounds = new Rectangle(v.x, v.x, v.y, v.y);
          return;
        }

        var w2 = v.width / 2,
            h2 = v.height / 2;
        v.bounds = new Rectangle(v.x - w2, v.x + w2, v.y - h2, v.y + h2);
      });
      computeGroupBounds(rootGroup);
      var i = nodes.length;
      groups.forEach(function (g) {
        _this2.variables[i] = g.minVar = new IndexedVariable(i++, typeof g.stiffness !== "undefined" ? g.stiffness : 0.01);
        _this2.variables[i] = g.maxVar = new IndexedVariable(i++, typeof g.stiffness !== "undefined" ? g.stiffness : 0.01);
      });
    }
  }

  var _proto2 = Projection.prototype;

  _proto2.createSeparation = function createSeparation(c) {
    return new Constraint(this.nodes[c.left].variable, this.nodes[c.right].variable, c.gap, typeof c.equality !== "undefined" ? c.equality : false);
  } // simple satisfaction of alignment constraints to ensure initial feasibility
  ;

  _proto2.makeFeasible = function makeFeasible(c) {
    var _this3 = this;

    if (!this.avoidOverlaps) return; // sort nodes in constraint by position (along "guideline")

    var axis = 'x',
        dim = 'width';
    if (c.axis === 'x') axis = 'y', dim = 'height';
    var vs = c.offsets.map(function (o) {
      return _this3.nodes[o.node];
    }).sort(function (a, b) {
      return a[axis] - b[axis];
    });
    var p = null;
    vs.forEach(function (v) {
      // if two nodes overlap then shove the second one along
      if (p) {
        var nextPos = p[axis] + p[dim];

        if (nextPos > v[axis]) {
          v[axis] = nextPos;
        }
      }

      p = v;
    });
  };

  _proto2.createAlignment = function createAlignment(c) {
    var _this4 = this;

    var u = this.nodes[c.offsets[0].node].variable;
    this.makeFeasible(c);
    var cs = c.axis === 'x' ? this.xConstraints : this.yConstraints;
    c.offsets.slice(1).forEach(function (o) {
      var v = _this4.nodes[o.node].variable;
      cs.push(new Constraint(u, v, o.offset, true));
    });
  };

  _proto2.createConstraints = function createConstraints(constraints) {
    var _this5 = this;

    var isSep = function isSep(c) {
      return typeof c.type === 'undefined' || c.type === 'separation';
    };

    this.xConstraints = constraints.filter(function (c) {
      return c.axis === "x" && isSep(c);
    }).map(function (c) {
      return _this5.createSeparation(c);
    });
    this.yConstraints = constraints.filter(function (c) {
      return c.axis === "y" && isSep(c);
    }).map(function (c) {
      return _this5.createSeparation(c);
    });
    constraints.filter(function (c) {
      return c.type === 'alignment';
    }).forEach(function (c) {
      return _this5.createAlignment(c);
    });
  };

  _proto2.setupVariablesAndBounds = function setupVariablesAndBounds(x0, y0, desired, getDesired) {
    this.nodes.forEach(function (v, i) {
      if (v.fixed) {
        v.variable.weight = v.fixedWeight ? v.fixedWeight : 1000;
        desired[i] = getDesired(v);
      } else {
        v.variable.weight = 1;
      }

      var w = (v.width || 0) / 2,
          h = (v.height || 0) / 2;
      var ix = x0[i],
          iy = y0[i];
      v.bounds = new Rectangle(ix - w, ix + w, iy - h, iy + h);
    });
  };

  _proto2.xProject = function xProject(x0, y0, x) {
    if (!this.rootGroup && !(this.avoidOverlaps || this.xConstraints)) return;
    this.project(x0, y0, x0, x, function (v) {
      return v.px;
    }, this.xConstraints, generateXGroupConstraints, function (v) {
      return v.bounds.setXCentre(x[v.variable.index] = v.variable.position());
    }, function (g) {
      var xmin = x[g.minVar.index] = g.minVar.position();
      var xmax = x[g.maxVar.index] = g.maxVar.position();
      var p2 = g.padding / 2;
      g.bounds.x = xmin - p2;
      g.bounds.X = xmax + p2;
    });
  };

  _proto2.yProject = function yProject(x0, y0, y) {
    if (!this.rootGroup && !this.yConstraints) return;
    this.project(x0, y0, y0, y, function (v) {
      return v.py;
    }, this.yConstraints, generateYGroupConstraints, function (v) {
      return v.bounds.setYCentre(y[v.variable.index] = v.variable.position());
    }, function (g) {
      var ymin = y[g.minVar.index] = g.minVar.position();
      var ymax = y[g.maxVar.index] = g.maxVar.position();
      var p2 = g.padding / 2;
      g.bounds.y = ymin - p2;
      g.bounds.Y = ymax + p2;
    });
  };

  _proto2.projectFunctions = function projectFunctions() {
    var _this6 = this;

    return [function (x0, y0, x) {
      return _this6.xProject(x0, y0, x);
    }, function (x0, y0, y) {
      return _this6.yProject(x0, y0, y);
    }];
  };

  _proto2.project = function project(x0, y0, start, desired, getDesired, cs, generateConstraints, updateNodeBounds, updateGroupBounds) {
    this.setupVariablesAndBounds(x0, y0, desired, getDesired);

    if (this.rootGroup && this.avoidOverlaps) {
      computeGroupBounds(this.rootGroup);
      cs = cs.concat(generateConstraints(this.rootGroup));
    }

    this.solve(this.variables, cs, start, desired);
    this.nodes.forEach(updateNodeBounds);

    if (this.rootGroup && this.avoidOverlaps) {
      this.groups.forEach(updateGroupBounds);
      computeGroupBounds(this.rootGroup);
    }
  };

  _proto2.solve = function solve(vs, cs, starting, desired) {
    var solver = new Solver(vs, cs);
    solver.setStartingPositions(starting);
    solver.setDesiredPositions(desired);
    solver.solve();
  };

  return Projection;
}();

var PairingHeap = /*#__PURE__*/function () {
  // from: https://gist.github.com/nervoussystem
  //{elem:object, subheaps:[array of heaps]}
  function PairingHeap(elem) {
    this.elem = elem;
    this.subheaps = [];
  }

  var _proto = PairingHeap.prototype;

  _proto.toString = function toString(selector) {
    var str = "",
        needComma = false;

    for (var i = 0; i < this.subheaps.length; ++i) {
      var subheap = this.subheaps[i];

      if (!subheap.elem) {
        needComma = false;
        continue;
      }

      if (needComma) {
        str = str + ",";
      }

      str = str + subheap.toString(selector);
      needComma = true;
    }

    if (str !== "") {
      str = "(" + str + ")";
    }

    return (this.elem ? selector(this.elem) : "") + str;
  };

  _proto.forEach = function forEach(f) {
    if (!this.empty()) {
      f(this.elem, this);
      this.subheaps.forEach(function (s) {
        return s.forEach(f);
      });
    }
  };

  _proto.count = function count() {
    return this.empty() ? 0 : 1 + this.subheaps.reduce(function (n, h) {
      return n + h.count();
    }, 0);
  };

  _proto.min = function min() {
    return this.elem;
  };

  _proto.empty = function empty() {
    return this.elem == null;
  };

  _proto.contains = function contains(h) {
    if (this === h) return true;

    for (var i = 0; i < this.subheaps.length; i++) {
      if (this.subheaps[i].contains(h)) return true;
    }

    return false;
  };

  _proto.isHeap = function isHeap(lessThan) {
    var _this = this;

    return this.subheaps.every(function (h) {
      return lessThan(_this.elem, h.elem) && h.isHeap(lessThan);
    });
  };

  _proto.insert = function insert(obj, lessThan) {
    return this.merge(new PairingHeap(obj), lessThan);
  };

  _proto.merge = function merge(heap2, lessThan) {
    if (this.empty()) return heap2;else if (heap2.empty()) return this;else if (lessThan(this.elem, heap2.elem)) {
      this.subheaps.push(heap2);
      return this;
    } else {
      heap2.subheaps.push(this);
      return heap2;
    }
  };

  _proto.removeMin = function removeMin(lessThan) {
    if (this.empty()) return null;else return this.mergePairs(lessThan);
  };

  _proto.mergePairs = function mergePairs(lessThan) {
    if (this.subheaps.length == 0) return new PairingHeap(null);else if (this.subheaps.length == 1) {
      return this.subheaps[0];
    } else {
      var firstPair = this.subheaps.pop().merge(this.subheaps.pop(), lessThan);
      var remaining = this.mergePairs(lessThan);
      return firstPair.merge(remaining, lessThan);
    }
  };

  _proto.decreaseKey = function decreaseKey(subheap, newValue, setHeapNode, lessThan) {
    var newHeap = subheap.removeMin(lessThan); //reassign subheap values to preserve tree

    subheap.elem = newHeap.elem;
    subheap.subheaps = newHeap.subheaps;

    if (setHeapNode !== null && newHeap.elem !== null) {
      setHeapNode(subheap.elem, subheap);
    }

    var pairingNode = new PairingHeap(newValue);

    if (setHeapNode !== null) {
      setHeapNode(newValue, pairingNode);
    }

    return this.merge(pairingNode, lessThan);
  };

  return PairingHeap;
}();
/**
 * @class PriorityQueue a min priority queue backed by a pairing heap
 */

var PriorityQueue = /*#__PURE__*/function () {
  function PriorityQueue(lessThan) {
    this.lessThan = lessThan;
  }
  /**
   * @method top
   * @return the top element (the min element as defined by lessThan)
   */


  var _proto2 = PriorityQueue.prototype;

  _proto2.top = function top() {
    if (this.empty()) {
      return null;
    }

    return this.root.elem;
  }
  /**
   * @method push
   * put things on the heap
   */
  ;

  _proto2.push = function push() {
    var pairingNode;

    for (var i = 0, arg; arg = i < 0 || arguments.length <= i ? undefined : arguments[i]; ++i) {
      pairingNode = new PairingHeap(arg);
      this.root = this.empty() ? pairingNode : this.root.merge(pairingNode, this.lessThan);
    }

    return pairingNode;
  }
  /**
   * @method empty
   * @return true if no more elements in queue
   */
  ;

  _proto2.empty = function empty() {
    return !this.root || !this.root.elem;
  }
  /**
   * @method isHeap check heap condition (for testing)
   * @return true if queue is in valid state
   */
  ;

  _proto2.isHeap = function isHeap() {
    return this.root.isHeap(this.lessThan);
  }
  /**
   * @method forEach apply f to each element of the queue
   * @param f function to apply
   */
  ;

  _proto2.forEach = function forEach(f) {
    this.root.forEach(f);
  }
  /**
   * @method pop remove and return the min element from the queue
   */
  ;

  _proto2.pop = function pop() {
    if (this.empty()) {
      return null;
    }

    var obj = this.root.min();
    this.root = this.root.removeMin(this.lessThan);
    return obj;
  }
  /**
   * @method reduceKey reduce the key value of the specified heap node
   */
  ;

  _proto2.reduceKey = function reduceKey(heapNode, newKey, setHeapNode) {
    if (setHeapNode === void 0) {
      setHeapNode = null;
    }

    this.root = this.root.decreaseKey(heapNode, newKey, setHeapNode, this.lessThan);
  };

  _proto2.toString = function toString(selector) {
    return this.root.toString(selector);
  }
  /**
   * @method count
   * @return number of elements in queue
   */
  ;

  _proto2.count = function count() {
    return this.root.count();
  };

  return PriorityQueue;
}();

var Neighbour = function Neighbour(id, distance) {
  this.id = id;
  this.distance = distance;
};

var Node$2 = function Node(id) {
  this.id = id;
  this.neighbours = [];
};

var QueueEntry = function QueueEntry(node, prev, d) {
  this.node = node;
  this.prev = prev;
  this.d = d;
};
/**
 * calculates all-pairs shortest paths or shortest paths from a single node
 * @class Calculator
 * @constructor
 * @param n {number} number of nodes
 * @param es {Edge[]} array of edges
 */


var Calculator = /*#__PURE__*/function () {
  function Calculator(n, es, getSourceIndex, getTargetIndex, getLength) {
    this.n = n;
    this.es = es;
    this.neighbours = new Array(this.n);
    var i = this.n;

    while (i--) {
      this.neighbours[i] = new Node$2(i);
    }

    i = this.es.length;

    while (i--) {
      var e = this.es[i];
      var u = getSourceIndex(e),
          v = getTargetIndex(e);
      var d = getLength(e);
      this.neighbours[u].neighbours.push(new Neighbour(v, d));
      this.neighbours[v].neighbours.push(new Neighbour(u, d));
    }
  }
  /**
   * compute shortest paths for graph over n nodes with edges an array of source/target pairs
   * edges may optionally have a length attribute.  1 is the default.
   * Uses Johnson's algorithm.
   *
   * @method DistanceMatrix
   * @return the distance matrix
   */


  var _proto = Calculator.prototype;

  _proto.DistanceMatrix = function DistanceMatrix() {
    var D = new Array(this.n);

    for (var i = 0; i < this.n; ++i) {
      D[i] = this.dijkstraNeighbours(i);
    }

    return D;
  }
  /**
   * get shortest paths from a specified start node
   * @method DistancesFromNode
   * @param start node index
   * @return array of path lengths
   */
  ;

  _proto.DistancesFromNode = function DistancesFromNode(start) {
    return this.dijkstraNeighbours(start);
  };

  _proto.PathFromNodeToNode = function PathFromNodeToNode(start, end) {
    return this.dijkstraNeighbours(start, end);
  } // find shortest path from start to end, with the opportunity at
  // each edge traversal to compute a custom cost based on the
  // previous edge.  For example, to penalise bends.
  ;

  _proto.PathFromNodeToNodeWithPrevCost = function PathFromNodeToNodeWithPrevCost(start, end, prevCost) {
    var q = new PriorityQueue(function (a, b) {
      return a.d <= b.d;
    }),
        u = this.neighbours[start],
        qu = new QueueEntry(u, null, 0),
        visitedFrom = {};
    q.push(qu);

    while (!q.empty()) {
      qu = q.pop();
      u = qu.node;

      if (u.id === end) {
        break;
      }

      var i = u.neighbours.length;

      while (i--) {
        var neighbour = u.neighbours[i],
            v = this.neighbours[neighbour.id]; // don't double back

        if (qu.prev && v.id === qu.prev.node.id) continue; // don't retraverse an edge if it has already been explored
        // from a lower cost route

        var viduid = v.id + ',' + u.id;
        if (viduid in visitedFrom && visitedFrom[viduid] <= qu.d) continue;
        var cc = qu.prev ? prevCost(qu.prev.node.id, u.id, v.id) : 0,
            t = qu.d + neighbour.distance + cc; // store cost of this traversal

        visitedFrom[viduid] = t;
        q.push(new QueueEntry(v, qu, t));
      }
    }

    var path = [];

    while (qu.prev) {
      qu = qu.prev;
      path.push(qu.node.id);
    }

    return path;
  };

  _proto.dijkstraNeighbours = function dijkstraNeighbours(start, dest) {
    if (dest === void 0) {
      dest = -1;
    }

    var q = new PriorityQueue(function (a, b) {
      return a.d <= b.d;
    }),
        i = this.neighbours.length,
        d = new Array(i);

    while (i--) {
      var node = this.neighbours[i];
      node.d = i === start ? 0 : Number.POSITIVE_INFINITY;
      node.q = q.push(node);
    }

    while (!q.empty()) {
      // console.log(q.toString(function (u) { return u.id + "=" + (u.d === Number.POSITIVE_INFINITY ? "\u221E" : u.d.toFixed(2) )}));
      var u = q.pop();
      d[u.id] = u.d;

      if (u.id === dest) {
        var path = [];
        var v = u;

        while (typeof v.prev !== 'undefined') {
          path.push(v.prev.id);
          v = v.prev;
        }

        return path;
      }

      i = u.neighbours.length;

      while (i--) {
        var neighbour = u.neighbours[i];
        var v = this.neighbours[neighbour.id];
        var t = u.d + neighbour.distance;

        if (u.d !== Number.MAX_VALUE && v.d > t) {
          v.d = t;
          v.prev = u;
          q.reduceKey(v.q, v, function (e, q) {
            return e.q = q;
          });
        }
      }
    }

    return d;
  };

  return Calculator;
}();

var Point = function Point() {};
var LineSegment = function LineSegment(x1, y1, x2, y2) {
  this.x1 = x1;
  this.y1 = y1;
  this.x2 = x2;
  this.y2 = y2;
};
var PolyPoint = /*#__PURE__*/function (_Point) {
  _inheritsLoose(PolyPoint, _Point);

  function PolyPoint() {
    return _Point.apply(this, arguments) || this;
  }

  return PolyPoint;
}(Point);
/** tests if a point is Left|On|Right of an infinite line.
 * @param points P0, P1, and P2
 * @return >0 for P2 left of the line through P0 and P1
 *            =0 for P2 on the line
 *            <0 for P2 right of the line
 */

function isLeft(P0, P1, P2) {
  return (P1.x - P0.x) * (P2.y - P0.y) - (P2.x - P0.x) * (P1.y - P0.y);
}

function above(p, vi, vj) {
  return isLeft(p, vi, vj) > 0;
}

function below(p, vi, vj) {
  return isLeft(p, vi, vj) < 0;
}
/**
 * returns the convex hull of a set of points using Andrew's monotone chain algorithm
 * see: http://geomalgorithms.com/a10-_hull-1.html#Monotone%20Chain
 * @param S array of points
 * @return the convex hull as an array of points
 */


function ConvexHull(S) {
  var P = S.slice(0).sort(function (a, b) {
    return a.x !== b.x ? b.x - a.x : b.y - a.y;
  });
  var n = S.length,
      i;
  var minmin = 0;
  var xmin = P[0].x;

  for (i = 1; i < n; ++i) {
    if (P[i].x !== xmin) break;
  }

  var minmax = i - 1;
  var H = [];
  H.push(P[minmin]); // push minmin point onto stack

  if (minmax === n - 1) {
    // degenerate case: all x-coords == xmin
    if (P[minmax].y !== P[minmin].y) // a  nontrivial segment
      H.push(P[minmax]);
  } else {
    // Get the indices of points with max x-coord and min|max y-coord
    var maxmin,
        maxmax = n - 1;
    var xmax = P[n - 1].x;

    for (i = n - 2; i >= 0; i--) {
      if (P[i].x !== xmax) break;
    }

    maxmin = i + 1; // Compute the lower hull on the stack H

    i = minmax;

    while (++i <= maxmin) {
      // the lower line joins P[minmin]  with P[maxmin]
      if (isLeft(P[minmin], P[maxmin], P[i]) >= 0 && i < maxmin) continue; // ignore P[i] above or on the lower line

      while (H.length > 1) // there are at least 2 points on the stack
      {
        // test if  P[i] is left of the line at the stack top
        if (isLeft(H[H.length - 2], H[H.length - 1], P[i]) > 0) break; // P[i] is a new hull  vertex
        else H.length -= 1; // pop top point off  stack
      }

      if (i != minmin) H.push(P[i]);
    } // Next, compute the upper hull on the stack H above the bottom hull


    if (maxmax != maxmin) // if  distinct xmax points
      H.push(P[maxmax]); // push maxmax point onto stack

    var bot = H.length; // the bottom point of the upper hull stack

    i = maxmin;

    while (--i >= minmax) {
      // the upper line joins P[maxmax]  with P[minmax]
      if (isLeft(P[maxmax], P[minmax], P[i]) >= 0 && i > minmax) continue; // ignore P[i] below or on the upper line

      while (H.length > bot) // at least 2 points on the upper stack
      {
        // test if  P[i] is left of the line at the stack top
        if (isLeft(H[H.length - 2], H[H.length - 1], P[i]) > 0) break; // P[i] is a new hull  vertex
        else H.length -= 1; // pop top point off  stack
      }

      if (i != minmin) H.push(P[i]); // push P[i] onto stack
    }
  }

  return H;
} // apply f to the points in P in clockwise order around the point p

function clockwiseRadialSweep(p, P, f) {
  P.slice(0).sort(function (a, b) {
    return Math.atan2(a.y - p.y, a.x - p.x) - Math.atan2(b.y - p.y, b.x - p.x);
  }).forEach(f);
}
//    Input:  P = a 2D point (exterior to the polygon)
//            n = number of polygon vertices
//            V = array of vertices for a 2D convex polygon
//    Output: rtan = index of rightmost tangent point V[rtan]
//            ltan = index of leftmost tangent point V[ltan]


function tangent_PointPolyC(P, V) {
  // Rtangent_PointPolyC and Ltangent_PointPolyC require polygon to be
  // "closed" with the first vertex duplicated at end, so V[n-1] = V[0].
  var Vclosed = V.slice(0); // Copy V

  Vclosed.push(V[0]); // Add V[0] at end

  return {
    rtan: Rtangent_PointPolyC(P, Vclosed),
    ltan: Ltangent_PointPolyC(P, Vclosed)
  };
} // Rtangent_PointPolyC(): binary search for convex polygon right tangent
//    Input:  P = a 2D point (exterior to the polygon)
//            n = number of polygon vertices
//            V = array of vertices for a 2D convex polygon with first
//                vertex duplicated as last, so V[n-1] = V[0]
//    Return: index "i" of rightmost tangent point V[i]


function Rtangent_PointPolyC(P, V) {
  var n = V.length - 1; // use binary search for large convex polygons

  var a, b, c; // indices for edge chain endpoints

  var upA, dnC; // test for up direction of edges a and c
  // rightmost tangent = maximum for the isLeft() ordering
  // test if V[0] is a local maximum

  if (below(P, V[1], V[0]) && !above(P, V[n - 1], V[0])) return 0; // V[0] is the maximum tangent point

  for (a = 0, b = n;;) {
    // start chain = [0,n] with V[n]=V[0]
    if (b - a === 1) if (above(P, V[a], V[b])) return a;else return b;
    c = Math.floor((a + b) / 2); // midpoint of [a,b], and 0<c<n

    dnC = below(P, V[c + 1], V[c]);
    if (dnC && !above(P, V[c - 1], V[c])) return c; // V[c] is the maximum tangent point
    // no max yet, so continue with the binary search
    // pick one of the two subchains [a,c] or [c,b]

    upA = above(P, V[a + 1], V[a]);

    if (upA) {
      // edge a points up
      if (dnC) // edge c points down
        b = c; // select [a,c]
      else {
          // edge c points up
          if (above(P, V[a], V[c])) // V[a] above V[c]
            b = c; // select [a,c]
          else // V[a] below V[c]
            a = c; // select [c,b]
        }
    } else {
      // edge a points down
      if (!dnC) // edge c points up
        a = c; // select [c,b]
      else {
          // edge c points down
          if (below(P, V[a], V[c])) // V[a] below V[c]
            b = c; // select [a,c]
          else // V[a] above V[c]
            a = c; // select [c,b]
        }
    }
  }
} // Ltangent_PointPolyC(): binary search for convex polygon left tangent
//    Input:  P = a 2D point (exterior to the polygon)
//            n = number of polygon vertices
//            V = array of vertices for a 2D convex polygon with first
//                vertex duplicated as last, so V[n-1] = V[0]
//    Return: index "i" of leftmost tangent point V[i]


function Ltangent_PointPolyC(P, V) {
  var n = V.length - 1; // use binary search for large convex polygons

  var a, b, c; // indices for edge chain endpoints

  var dnA, dnC; // test for down direction of edges a and c
  // leftmost tangent = minimum for the isLeft() ordering
  // test if V[0] is a local minimum

  if (above(P, V[n - 1], V[0]) && !below(P, V[1], V[0])) return 0; // V[0] is the minimum tangent point

  for (a = 0, b = n;;) {
    // start chain = [0,n] with V[n] = V[0]
    if (b - a === 1) if (below(P, V[a], V[b])) return a;else return b;
    c = Math.floor((a + b) / 2); // midpoint of [a,b], and 0<c<n

    dnC = below(P, V[c + 1], V[c]);
    if (above(P, V[c - 1], V[c]) && !dnC) return c; // V[c] is the minimum tangent point
    // no min yet, so continue with the binary search
    // pick one of the two subchains [a,c] or [c,b]

    dnA = below(P, V[a + 1], V[a]);

    if (dnA) {
      // edge a points down
      if (!dnC) // edge c points up
        b = c; // select [a,c]
      else {
          // edge c points down
          if (below(P, V[a], V[c])) // V[a] below V[c]
            b = c; // select [a,c]
          else // V[a] above V[c]
            a = c; // select [c,b]
        }
    } else {
      // edge a points up
      if (dnC) // edge c points down
        a = c; // select [c,b]
      else {
          // edge c points up
          if (above(P, V[a], V[c])) // V[a] above V[c]
            b = c; // select [a,c]
          else // V[a] below V[c]
            a = c; // select [c,b]
        }
    }
  }
} // RLtangent_PolyPolyC(): get the RL tangent between two convex polygons
//    Input:  m = number of vertices in polygon 1
//            V = array of vertices for convex polygon 1 with V[m]=V[0]
//            n = number of vertices in polygon 2
//            W = array of vertices for convex polygon 2 with W[n]=W[0]
//    Output: *t1 = index of tangent point V[t1] for polygon 1
//            *t2 = index of tangent point W[t2] for polygon 2


function tangent_PolyPolyC(V, W, t1, t2, cmp1, cmp2) {
  var ix1, ix2; // search indices for polygons 1 and 2
  // first get the initial vertex on each polygon

  ix1 = t1(W[0], V); // right tangent from W[0] to V

  ix2 = t2(V[ix1], W); // left tangent from V[ix1] to W
  // ping-pong linear search until it stabilizes

  var done = false; // flag when done

  while (!done) {
    done = true; // assume done until...

    while (true) {
      if (ix1 === V.length - 1) ix1 = 0;
      if (cmp1(W[ix2], V[ix1], V[ix1 + 1])) break;
      ++ix1; // get Rtangent from W[ix2] to V
    }

    while (true) {
      if (ix2 === 0) ix2 = W.length - 1;
      if (cmp2(V[ix1], W[ix2], W[ix2 - 1])) break;
      --ix2; // get Ltangent from V[ix1] to W

      done = false; // not done if had to adjust this
    }
  }

  return {
    t1: ix1,
    t2: ix2
  };
}
function LRtangent_PolyPolyC(V, W) {
  var rl = RLtangent_PolyPolyC(W, V);
  return {
    t1: rl.t2,
    t2: rl.t1
  };
}
function RLtangent_PolyPolyC(V, W) {
  return tangent_PolyPolyC(V, W, Rtangent_PointPolyC, Ltangent_PointPolyC, above, below);
}
function LLtangent_PolyPolyC(V, W) {
  return tangent_PolyPolyC(V, W, Ltangent_PointPolyC, Ltangent_PointPolyC, below, below);
}
function RRtangent_PolyPolyC(V, W) {
  return tangent_PolyPolyC(V, W, Rtangent_PointPolyC, Rtangent_PointPolyC, above, above);
}
var BiTangent = function BiTangent(t1, t2) {
  this.t1 = t1;
  this.t2 = t2;
};
var BiTangents = function BiTangents() {};
var TVGPoint = /*#__PURE__*/function (_Point2) {
  _inheritsLoose(TVGPoint, _Point2);

  function TVGPoint() {
    return _Point2.apply(this, arguments) || this;
  }

  return TVGPoint;
}(Point);
var VisibilityVertex = function VisibilityVertex(id, polyid, polyvertid, p) {
  this.id = id;
  this.polyid = polyid;
  this.polyvertid = polyvertid;
  this.p = p;
  p.vv = this;
};
var VisibilityEdge = /*#__PURE__*/function () {
  function VisibilityEdge(source, target) {
    this.source = source;
    this.target = target;
  }

  var _proto = VisibilityEdge.prototype;

  _proto.length = function length() {
    var dx = this.source.p.x - this.target.p.x;
    var dy = this.source.p.y - this.target.p.y;
    return Math.sqrt(dx * dx + dy * dy);
  };

  return VisibilityEdge;
}();
var TangentVisibilityGraph = /*#__PURE__*/function () {
  function TangentVisibilityGraph(P, g0) {
    this.P = P;
    this.V = [];
    this.E = [];

    if (!g0) {
      var n = P.length; // For each node...

      for (var i = 0; i < n; i++) {
        var p = P[i]; // For each node vertex.

        for (var j = 0; j < p.length; ++j) {
          var pj = p[j],
              vv = new VisibilityVertex(this.V.length, i, j, pj);
          this.V.push(vv); // For the every iteration but the first, generate an
          // edge from the previous visibility vertex to the
          // current one.

          if (j > 0) this.E.push(new VisibilityEdge(p[j - 1].vv, vv));
        } // Add a visibility edge from the first vertex to the last.


        if (p.length > 1) this.E.push(new VisibilityEdge(p[0].vv, p[p.length - 1].vv));
      }

      for (var i = 0; i < n - 1; i++) {
        var Pi = P[i];

        for (var j = i + 1; j < n; j++) {
          var Pj = P[j],
              t = tangents(Pi, Pj);

          for (var q in t) {
            var c = t[q],
                source = Pi[c.t1],
                target = Pj[c.t2];
            this.addEdgeIfVisible(source, target, i, j);
          }
        }
      }
    } else {
      this.V = g0.V.slice(0);
      this.E = g0.E.slice(0);
    }
  }

  var _proto2 = TangentVisibilityGraph.prototype;

  _proto2.addEdgeIfVisible = function addEdgeIfVisible(u, v, i1, i2) {
    if (!this.intersectsPolys(new LineSegment(u.x, u.y, v.x, v.y), i1, i2)) {
      this.E.push(new VisibilityEdge(u.vv, v.vv));
    }
  };

  _proto2.addPoint = function addPoint(p, i1) {
    var n = this.P.length;
    this.V.push(new VisibilityVertex(this.V.length, n, 0, p));

    for (var i = 0; i < n; ++i) {
      if (i === i1) continue;
      var poly = this.P[i],
          t = tangent_PointPolyC(p, poly);
      this.addEdgeIfVisible(p, poly[t.ltan], i1, i);
      this.addEdgeIfVisible(p, poly[t.rtan], i1, i);
    }

    return p.vv;
  };

  _proto2.intersectsPolys = function intersectsPolys(l, i1, i2) {
    for (var i = 0, n = this.P.length; i < n; ++i) {
      if (i != i1 && i != i2 && intersects(l, this.P[i]).length > 0) {
        return true;
      }
    }

    return false;
  };

  return TangentVisibilityGraph;
}();

function intersects(l, P) {
  var ints = [];

  for (var i = 1, n = P.length; i < n; ++i) {
    var _int = Rectangle.lineIntersection(l.x1, l.y1, l.x2, l.y2, P[i - 1].x, P[i - 1].y, P[i].x, P[i].y);

    if (_int) ints.push(_int);
  }

  return ints;
}

function tangents(V, W) {
  var m = V.length - 1,
      n = W.length - 1;
  var bt = new BiTangents();

  for (var i = 0; i <= m; ++i) {
    for (var j = 0; j <= n; ++j) {
      var v1 = V[i == 0 ? m : i - 1];
      var v2 = V[i];
      var v3 = V[i == m ? 0 : i + 1];
      var w1 = W[j == 0 ? n : j - 1];
      var w2 = W[j];
      var w3 = W[j == n ? 0 : j + 1];
      var v1v2w2 = isLeft(v1, v2, w2);
      var v2w1w2 = isLeft(v2, w1, w2);
      var v2w2w3 = isLeft(v2, w2, w3);
      var w1w2v2 = isLeft(w1, w2, v2);
      var w2v1v2 = isLeft(w2, v1, v2);
      var w2v2v3 = isLeft(w2, v2, v3);

      if (v1v2w2 >= 0 && v2w1w2 >= 0 && v2w2w3 < 0 && w1w2v2 >= 0 && w2v1v2 >= 0 && w2v2v3 < 0) {
        bt.ll = new BiTangent(i, j);
      } else if (v1v2w2 <= 0 && v2w1w2 <= 0 && v2w2w3 > 0 && w1w2v2 <= 0 && w2v1v2 <= 0 && w2v2v3 > 0) {
        bt.rr = new BiTangent(i, j);
      } else if (v1v2w2 <= 0 && v2w1w2 > 0 && v2w2w3 <= 0 && w1w2v2 >= 0 && w2v1v2 < 0 && w2v2v3 >= 0) {
        bt.rl = new BiTangent(i, j);
      } else if (v1v2w2 >= 0 && v2w1w2 < 0 && v2w2w3 >= 0 && w1w2v2 <= 0 && w2v1v2 > 0 && w2v2v3 <= 0) {
        bt.lr = new BiTangent(i, j);
      }
    }
  }

  return bt;
}

function isPointInsidePoly(p, poly) {
  for (var i = 1, n = poly.length; i < n; ++i) {
    if (below(poly[i - 1], poly[i], p)) return false;
  }

  return true;
}

function isAnyPInQ(p, q) {
  return !p.every(function (v) {
    return !isPointInsidePoly(v, q);
  });
}

function polysOverlap(p, q) {
  if (isAnyPInQ(p, q)) return true;
  if (isAnyPInQ(q, p)) return true;

  for (var i = 1, n = p.length; i < n; ++i) {
    var v = p[i],
        u = p[i - 1];
    if (intersects(new LineSegment(u.x, u.y, v.x, v.y), q).length > 0) return true;
  }

  return false;
}

var packingOptions = {
  PADDING: 10,
  GOLDEN_SECTION: (1 + /*#__PURE__*/Math.sqrt(5)) / 2,
  FLOAT_EPSILON: 0.0001,
  MAX_INERATIONS: 100
}; // assign x, y to nodes while using box packing algorithm for disconnected graphs

function applyPacking(graphs, w, h, node_size, desired_ratio, centerGraph) {
  if (desired_ratio === void 0) {
    desired_ratio = 1;
  }

  if (centerGraph === void 0) {
    centerGraph = true;
  }

  return function (node_size, desired_ratio) {
    var init_x = 0,
        init_y = 0,
        svg_width = w,
        svg_height = h,
        desired_ratio = typeof desired_ratio !== 'undefined' ? desired_ratio : 1,
        node_size = typeof node_size !== 'undefined' ? node_size : 0,
        real_width = 0,
        real_height = 0,
        min_width = 0,
        global_bottom = 0,
        line = [];
    if (graphs.length == 0) return; /// that would take care of single nodes problem
    // graphs.forEach(function (g) {
    //     if (g.array.length == 1) {
    //         g.array[0].x = 0;
    //         g.array[0].y = 0;
    //     }
    // });

    calculate_bb(graphs);
    apply(graphs);

    if (centerGraph) {
      put_nodes_to_right_positions(graphs);
    } // get bounding boxes for all separate graphs


    function calculate_bb(graphs) {
      graphs.forEach(function (g) {
        calculate_single_bb(g);
      });

      function calculate_single_bb(graph) {
        var min_x = Number.MAX_VALUE,
            min_y = Number.MAX_VALUE,
            max_x = 0,
            max_y = 0;
        graph.array.forEach(function (v) {
          var w = typeof v.width !== 'undefined' ? v.width : node_size;
          var h = typeof v.height !== 'undefined' ? v.height : node_size;
          w /= 2;
          h /= 2;
          max_x = Math.max(v.x + w, max_x);
          min_x = Math.min(v.x - w, min_x);
          max_y = Math.max(v.y + h, max_y);
          min_y = Math.min(v.y - h, min_y);
        });
        graph.width = max_x - min_x;
        graph.height = max_y - min_y;
      }
    } //function plot(data, left, right, opt_x, opt_y) {
    //    // plot the cost function
    //    var plot_svg = d3.select("body").append("svg")
    //        .attr("width", function () { return 2 * (right - left); })
    //        .attr("height", 200);
    //    var x = d3.time.scale().range([0, 2 * (right - left)]);
    //    var xAxis = d3.svg.axis().scale(x).orient("bottom");
    //    plot_svg.append("g").attr("class", "x axis")
    //        .attr("transform", "translate(0, 199)")
    //        .call(xAxis);
    //    var lastX = 0;
    //    var lastY = 0;
    //    var value = 0;
    //    for (var r = left; r < right; r += 1) {
    //        value = step(data, r);
    //        // value = 1;
    //        plot_svg.append("line").attr("x1", 2 * (lastX - left))
    //            .attr("y1", 200 - 30 * lastY)
    //            .attr("x2", 2 * r - 2 * left)
    //            .attr("y2", 200 - 30 * value)
    //            .style("stroke", "rgb(6,120,155)");
    //        lastX = r;
    //        lastY = value;
    //    }
    //    plot_svg.append("circle").attr("cx", 2 * opt_x - 2 * left).attr("cy", 200 - 30 * opt_y)
    //        .attr("r", 5).style('fill', "rgba(0,0,0,0.5)");
    //}
    // actual assigning of position to nodes


    function put_nodes_to_right_positions(graphs) {
      graphs.forEach(function (g) {
        // calculate current graph center:
        var center = {
          x: 0,
          y: 0
        };
        g.array.forEach(function (node) {
          center.x += node.x;
          center.y += node.y;
        });
        center.x /= g.array.length;
        center.y /= g.array.length; // calculate current top left corner:

        var corner = {
          x: center.x - g.width / 2,
          y: center.y - g.height / 2
        };
        var offset = {
          x: g.x - corner.x + svg_width / 2 - real_width / 2,
          y: g.y - corner.y + svg_height / 2 - real_height / 2
        }; // put nodes:

        g.array.forEach(function (node) {
          node.x += offset.x;
          node.y += offset.y;
        });
      });
    } // starts box packing algorithm
    // desired ratio is 1 by default


    function apply(data, desired_ratio) {
      var curr_best_f = Number.POSITIVE_INFINITY;
      var curr_best = 0;
      data.sort(function (a, b) {
        return b.height - a.height;
      });
      min_width = data.reduce(function (a, b) {
        return a.width < b.width ? a.width : b.width;
      });
      var left = x1 = min_width;
      var right = x2 = get_entire_width(data);
      var iterationCounter = 0;
      var f_x1 = Number.MAX_VALUE;
      var f_x2 = Number.MAX_VALUE;
      var flag = -1; // determines which among f_x1 and f_x2 to recompute

      var dx = Number.MAX_VALUE;
      var df = Number.MAX_VALUE;

      while (dx > min_width || df > packingOptions.FLOAT_EPSILON) {
        if (flag != 1) {
          var x1 = right - (right - left) / packingOptions.GOLDEN_SECTION;
          var f_x1 = step(data, x1);
        }

        if (flag != 0) {
          var x2 = left + (right - left) / packingOptions.GOLDEN_SECTION;
          var f_x2 = step(data, x2);
        }

        dx = Math.abs(x1 - x2);
        df = Math.abs(f_x1 - f_x2);

        if (f_x1 < curr_best_f) {
          curr_best_f = f_x1;
          curr_best = x1;
        }

        if (f_x2 < curr_best_f) {
          curr_best_f = f_x2;
          curr_best = x2;
        }

        if (f_x1 > f_x2) {
          left = x1;
          x1 = x2;
          f_x1 = f_x2;
          flag = 1;
        } else {
          right = x2;
          x2 = x1;
          f_x2 = f_x1;
          flag = 0;
        }

        if (iterationCounter++ > 100) {
          break;
        }
      } // plot(data, min_width, get_entire_width(data), curr_best, curr_best_f);


      step(data, curr_best);
    } // one iteration of the optimization method
    // (gives a proper, but not necessarily optimal packing)


    function step(data, max_width) {
      line = [];
      real_width = 0;
      real_height = 0;
      global_bottom = init_y;

      for (var i = 0; i < data.length; i++) {
        var o = data[i];
        put_rect(o, max_width);
      }

      return Math.abs(get_real_ratio() - desired_ratio);
    } // looking for a position to one box


    function put_rect(rect, max_width) {
      var parent = undefined;

      for (var i = 0; i < line.length; i++) {
        if (line[i].space_left >= rect.height && line[i].x + line[i].width + rect.width + packingOptions.PADDING - max_width <= packingOptions.FLOAT_EPSILON) {
          parent = line[i];
          break;
        }
      }

      line.push(rect);

      if (parent !== undefined) {
        rect.x = parent.x + parent.width + packingOptions.PADDING;
        rect.y = parent.bottom;
        rect.space_left = rect.height;
        rect.bottom = rect.y;
        parent.space_left -= rect.height + packingOptions.PADDING;
        parent.bottom += rect.height + packingOptions.PADDING;
      } else {
        rect.y = global_bottom;
        global_bottom += rect.height + packingOptions.PADDING;
        rect.x = init_x;
        rect.bottom = rect.y;
        rect.space_left = rect.height;
      }

      if (rect.y + rect.height - real_height > -packingOptions.FLOAT_EPSILON) real_height = rect.y + rect.height - init_y;
      if (rect.x + rect.width - real_width > -packingOptions.FLOAT_EPSILON) real_width = rect.x + rect.width - init_x;
    }

    function get_entire_width(data) {
      var width = 0;
      data.forEach(function (d) {
        return width += d.width + packingOptions.PADDING;
      });
      return width;
    }

    function get_real_ratio() {
      return real_width / real_height;
    }
  }(node_size, desired_ratio);
}
/**
 * connected components of graph
 * returns an array of {}
 */

function separateGraphs(nodes, links) {
  var marks = {};
  var ways = {};
  var graphs = [];
  var clusters = 0;

  for (var i = 0; i < links.length; i++) {
    var link = links[i];
    var n1 = link.source;
    var n2 = link.target;
    if (ways[n1.index]) ways[n1.index].push(n2);else ways[n1.index] = [n2];
    if (ways[n2.index]) ways[n2.index].push(n1);else ways[n2.index] = [n1];
  }

  for (var i = 0; i < nodes.length; i++) {
    var node = nodes[i];
    if (marks[node.index]) continue;
    explore_node(node, true);
  }

  function explore_node(n, is_new) {
    if (marks[n.index] !== undefined) return;

    if (is_new) {
      clusters++;
      graphs.push({
        array: []
      });
    }

    marks[n.index] = clusters;
    graphs[clusters - 1].array.push(n);
    var adjacent = ways[n.index];
    if (!adjacent) return;

    for (var j = 0; j < adjacent.length; j++) {
      explore_node(adjacent[j], false);
    }
  }

  return graphs;
}

function _loadWasmModule (sync, filepath, src, imports) {
  function _instantiateOrCompile(source, imports, stream) {
    var instantiateFunc = stream ? WebAssembly.instantiateStreaming : WebAssembly.instantiate;
    var compileFunc = stream ? WebAssembly.compileStreaming : WebAssembly.compile;

    if (imports) {
      return instantiateFunc(source, imports)
    } else {
      return compileFunc(source)
    }
  }

  var buf = null;

  if (filepath) {
    return _instantiateOrCompile(fetch(filepath), imports, true)
  }

  var raw = globalThis.atob(src);
      var rawLength = raw.length;
      buf = new Uint8Array(new ArrayBuffer(rawLength));
      for(var i = 0; i < rawLength; i++) {
         buf[i] = raw.charCodeAt(i);
      }

  if(sync) {
    var mod = new WebAssembly.Module(buf);
    return imports ? new WebAssembly.Instance(mod, imports) : mod
  } else {
    return _instantiateOrCompile(buf, imports, false)
  }
}

function wasmSIMD_bg(imports){return _loadWasmModule(0, null, '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IgIkACACIAE2AgwgAiAANgIIIAJB3IDAADYCBCACQeyAwAA2AgAgAhAWAAs+AQF/IwBBEGsiASQAIAFBCGogAEEIaigCADYCACABIAApAgA3AwAgASgCACIAQRRqKAIAGiAAKAIEGhASAAshACABBEADQCAAQQA6AAAgAEEBaiEAIAFBAWsiAQ0ACwsLJAACQCAAQXxNBEAgAEUEQEEEIQAMAgsgABABIgANAQsACyAACwsAIAEEQCAAEAQLCxEAQZyAwABBEUGwgMAAEBQACwsAIwAgAGokACMACwcAIAAoAiwLBwAgACgCFAsEABAACwwAQsC9op3Vg9rFSgsDAAELAwABCwvPAQEAQYCAwAALxQFzcmMvbGliLnJzAAAAABAACgAAAEYAAAAtAAAAY2FwYWNpdHkgb3ZlcmZsb3cAAABAABAAHAAAACgCAAAFAAAAbGlicmFyeS9hbGxvYy9zcmMvcmF3X3ZlYy5ycwIAAAAAAAAAAQAAAAMAAABjYWxsZWQgYE9wdGlvbjo6dW53cmFwKClgIG9uIGEgYE5vbmVgIHZhbHVlAKgAEAAcAAAA7AEAAB4AAABsaWJyYXJ5L3N0ZC9zcmMvcGFuaWNraW5nLnJzBADtCgRuYW1lAeUKJAAyd2FzbV9iaW5kZ2VuOjpfX3diaW5kZ2VuX21lbW9yeTo6aGJkN2UyN2VmZDY4NDMxMGEBOmRsbWFsbG9jOjpkbG1hbGxvYzo6RGxtYWxsb2M8QT46Om1hbGxvYzo6aDdmOTFkNjczMTYzYTc0MDUCCmNvbXB1dGVfM2QDCmNvbXB1dGVfMmQEOGRsbWFsbG9jOjpkbG1hbGxvYzo6RGxtYWxsb2M8QT46OmZyZWU6Omg5YWMzZTlmMWY1ODJkMjJkBUFkbG1hbGxvYzo6ZGxtYWxsb2M6OkRsbWFsbG9jPEE+OjpkaXNwb3NlX2NodW5rOjpoM2EzMDgxM2E4ZmI1MzFiNgYhY3JlYXRlX2Rlcml2YXRpdmVfY29tcHV0ZXJfY3R4XzNkByFjcmVhdGVfZGVyaXZhdGl2ZV9jb21wdXRlcl9jdHhfMmQIDl9fcnVzdF9yZWFsbG9jCRRjb21wdXRlX3N0ZXBfc2l6ZV8yZAoUY29tcHV0ZV9zdGVwX3NpemVfM2QLR2Rlcml2YXRpdmVfY29tcHV0ZXI6OkNvbnRleHQ8Xz46OmFwcGx5X2Rpc3BsYWNlbWVudHM6OmhkZjlkNmQ2M2M0NWQ1OWY2DEdkZXJpdmF0aXZlX2NvbXB1dGVyOjpDb250ZXh0PF8+OjphcHBseV9kaXNwbGFjZW1lbnRzOjpoOWY1NTk1M2RlOTg0MDc3MA0oYWxsb2M6OnZlYzo6ZnJvbV9lbGVtOjpoZGM0MTE5MGRjZjg2NzVjZg5OYWxsb2M6OnJhd192ZWM6OlJhd1ZlYzxULEE+OjpyZXNlcnZlOjpkb19yZXNlcnZlX2FuZF9oYW5kbGU6OmgzNTJhMTlmMzhmZGZjMTkwDw1hcHBseV9sb2NrXzNkEC5hbGxvYzo6cmF3X3ZlYzo6ZmluaXNoX2dyb3c6OmhmZDVhN2E2MTY5Mzk1OTk5EQ1hcHBseV9sb2NrXzJkEjdzdGQ6OnBhbmlja2luZzo6cnVzdF9wYW5pY193aXRoX2hvb2s6Omg4OTRmMmJkZWVhNGQwY2U4EwhzZXRfR18yZBQpY29yZTo6cGFuaWNraW5nOjpwYW5pYzo6aGEyZjIyOWQ3NzdhMTgwYzkVBm1lbWNweRYRcnVzdF9iZWdpbl91bndpbmQXLWNvcmU6OnBhbmlja2luZzo6cGFuaWNfZm10OjpoMGRmZTE1M2ViMGVmNDU2YRhJc3RkOjpzeXNfY29tbW9uOjpiYWNrdHJhY2U6Ol9fcnVzdF9lbmRfc2hvcnRfYmFja3RyYWNlOjpoODNhNDAzMmM2Yjk5NzQ0NhkGbWVtc2V0GhFfX3diaW5kZ2VuX21hbGxvYxsPX193YmluZGdlbl9mcmVlHDRhbGxvYzo6cmF3X3ZlYzo6Y2FwYWNpdHlfb3ZlcmZsb3c6Omg5MzgwNDdlMTFiYWJhOGIxHR9fX3diaW5kZ2VuX2FkZF90b19zdGFja19wb2ludGVyHghnZXRfRF8yZB8IZ2V0X2dfMmQgCmdldF9tZW1vcnkhMTxUIGFzIGNvcmU6OmFueTo6QW55Pjo6dHlwZV9pZDo6aGQ1NGJiZjU5MDI5OGNmYzIiN3N0ZDo6YWxsb2M6OmRlZmF1bHRfYWxsb2NfZXJyb3JfaG9vazo6aGJkYTBjOGRlYWExOTBiYTMjb2NvcmU6OnB0cjo6ZHJvcF9pbl9wbGFjZTwmY29yZTo6aXRlcjo6YWRhcHRlcnM6OmNvcGllZDo6Q29waWVkPGNvcmU6OnNsaWNlOjppdGVyOjpJdGVyPHU4Pj4+OjpoMjg5NzRmYTZmMDMyMzE3MgAaD3RhcmdldF9mZWF0dXJlcwErB3NpbWQxMjg=', imports)}

var setWasm = function setWasm(wasmModule) {
  try {
    return Promise.resolve(WebAssembly.instantiate(wasmModule, {
      "./derivative_computer_bg.js": {
        __wbindgen_memory: __wbindgen_memory
      }
    })).then(function (inst) {
      wasm = inst.exports;
    });
  } catch (e) {
    return Promise.reject(e);
  }
};
var wasm;
var heap = /*#__PURE__*/new Array(32).fill(undefined);
heap.push(undefined, null, true, false);
var heap_next = heap.length;

function addHeapObject(obj) {
  if (heap_next === heap.length) heap.push(heap.length + 1);
  var idx = heap_next;
  heap_next = heap[idx];
  heap[idx] = obj;
  return idx;
}

var cachegetFloat32Memory0 = null;

function getFloat32Memory0() {
  if (cachegetFloat32Memory0 === null || cachegetFloat32Memory0.buffer !== wasm.memory.buffer) {
    cachegetFloat32Memory0 = new Float32Array(wasm.memory.buffer);
  }

  return cachegetFloat32Memory0;
}

var WASM_VECTOR_LEN = 0;

function passArrayF32ToWasm0(arg, malloc) {
  var ptr = malloc(arg.length * 4);
  getFloat32Memory0().set(arg, ptr / 4);
  WASM_VECTOR_LEN = arg.length;
  return ptr;
}
/**
* @param {number} node_count
* @param {Float32Array} D
* @param {Float32Array} G
* @returns {number}
*/


function create_derivative_computer_ctx_2d(node_count, D, G) {
  var ptr0 = passArrayF32ToWasm0(D, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ptr1 = passArrayF32ToWasm0(G, wasm.__wbindgen_malloc);
  var len1 = WASM_VECTOR_LEN;
  var ret = wasm.create_derivative_computer_ctx_2d(node_count, ptr0, len0, ptr1, len1);
  return ret;
}
/**
* @param {number} node_count
* @param {Float32Array} D
* @param {Float32Array} G
* @returns {number}
*/

function create_derivative_computer_ctx_3d(node_count, D, G) {
  var ptr0 = passArrayF32ToWasm0(D, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ptr1 = passArrayF32ToWasm0(G, wasm.__wbindgen_malloc);
  var len1 = WASM_VECTOR_LEN;
  var ret = wasm.create_derivative_computer_ctx_3d(node_count, ptr0, len0, ptr1, len1);
  return ret;
}
var cachegetInt32Memory0 = null;

function getInt32Memory0() {
  if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== wasm.memory.buffer) {
    cachegetInt32Memory0 = new Int32Array(wasm.memory.buffer);
  }

  return cachegetInt32Memory0;
}

function getArrayF32FromWasm0(ptr, len) {
  return getFloat32Memory0().subarray(ptr / 4, ptr / 4 + len);
}
/**
* @param {number} ctx_ptr
* @param {Float32Array} x
* @returns {Float32Array}
*/


function compute_2d(ctx_ptr, x) {
  try {
    var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

    var ptr0 = passArrayF32ToWasm0(x, wasm.__wbindgen_malloc);
    var len0 = WASM_VECTOR_LEN;
    wasm.compute_2d(retptr, ctx_ptr, ptr0, len0);
    var r0 = getInt32Memory0()[retptr / 4 + 0];
    var r1 = getInt32Memory0()[retptr / 4 + 1];
    var v1 = getArrayF32FromWasm0(r0, r1).slice();

    wasm.__wbindgen_free(r0, r1 * 4);

    return v1;
  } finally {
    wasm.__wbindgen_add_to_stack_pointer(16);
  }
}
/**
* @param {number} ctx_ptr
* @param {Float32Array} x
* @returns {Float32Array}
*/

function compute_3d(ctx_ptr, x) {
  try {
    var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

    var ptr0 = passArrayF32ToWasm0(x, wasm.__wbindgen_malloc);
    var len0 = WASM_VECTOR_LEN;
    wasm.compute_3d(retptr, ctx_ptr, ptr0, len0);
    var r0 = getInt32Memory0()[retptr / 4 + 0];
    var r1 = getInt32Memory0()[retptr / 4 + 1];
    var v1 = getArrayF32FromWasm0(r0, r1).slice();

    wasm.__wbindgen_free(r0, r1 * 4);

    return v1;
  } finally {
    wasm.__wbindgen_add_to_stack_pointer(16);
  }
}
/**
* @param {number} ctx_ptr
* @param {number} u
* @param {number} p_0
* @param {number} p_1
* @param {number} x_0_u
* @param {number} x_1_u
*/

function apply_lock_2d(ctx_ptr, u, p_0, p_1, x_0_u, x_1_u) {
  wasm.apply_lock_2d(ctx_ptr, u, p_0, p_1, x_0_u, x_1_u);
}
/**
* @param {number} ctx_ptr
* @param {number} u
* @param {number} p_0
* @param {number} p_1
* @param {number} p_2
* @param {number} x_0_u
* @param {number} x_1_u
* @param {number} x_2_u
*/

function apply_lock_3d(ctx_ptr, u, p_0, p_1, p_2, x_0_u, x_1_u, x_2_u) {
  wasm.apply_lock_3d(ctx_ptr, u, p_0, p_1, p_2, x_0_u, x_1_u, x_2_u);
}
/**
* @param {number} ctx_ptr
* @returns {number}
*/

function compute_step_size_2d(ctx_ptr) {
  var ret = wasm.compute_step_size_2d(ctx_ptr);
  return ret;
}
/**
* @param {number} ctx_ptr
* @returns {number}
*/

function compute_step_size_3d(ctx_ptr) {
  var ret = wasm.compute_step_size_3d(ctx_ptr);
  return ret;
}

function getObject(idx) {
  return heap[idx];
}

function dropObject(idx) {
  if (idx < 36) return;
  heap[idx] = heap_next;
  heap_next = idx;
}

function takeObject(idx) {
  var ret = getObject(idx);
  dropObject(idx);
  return ret;
}
/**
* @returns {any}
*/


function get_memory() {
  var ret = wasm.get_memory();
  return takeObject(ret);
}
/**
* @param {number} ctx
* @returns {number}
*/

function get_D_2d(ctx) {
  var ret = wasm.get_D_2d(ctx);
  return ret;
}
/**
* @param {number} ctx
* @returns {number}
*/

function get_D_3d(ctx) {
  var ret = wasm.get_D_2d(ctx);
  return ret;
}
/**
* @param {number} ctx
* @returns {number}
*/

function get_g_2d(ctx) {
  var ret = wasm.get_g_2d(ctx);
  return ret;
}
/**
* @param {number} ctx
* @returns {number}
*/

function get_g_3d(ctx) {
  var ret = wasm.get_g_2d(ctx);
  return ret;
}
/**
* @param {number} ctx
* @param {Float32Array} new_G
*/

function set_G_2d(ctx, new_G) {
  var ptr0 = passArrayF32ToWasm0(new_G, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  wasm.set_G_2d(ctx, ptr0, len0);
}
/**
* @param {number} ctx
* @param {Float32Array} new_G
*/

function set_G_3d(ctx, new_G) {
  var ptr0 = passArrayF32ToWasm0(new_G, wasm.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  wasm.set_G_2d(ctx, ptr0, len0);
}
var __wbindgen_memory = function __wbindgen_memory() {
  var ret = wasm.memory;
  return addHeapObject(ret);
};



var wasmSIMD = {
  __proto__: null,
  setWasm: setWasm,
  create_derivative_computer_ctx_2d: create_derivative_computer_ctx_2d,
  create_derivative_computer_ctx_3d: create_derivative_computer_ctx_3d,
  compute_2d: compute_2d,
  compute_3d: compute_3d,
  apply_lock_2d: apply_lock_2d,
  apply_lock_3d: apply_lock_3d,
  compute_step_size_2d: compute_step_size_2d,
  compute_step_size_3d: compute_step_size_3d,
  get_memory: get_memory,
  get_D_2d: get_D_2d,
  get_D_3d: get_D_3d,
  get_g_2d: get_g_2d,
  get_g_3d: get_g_3d,
  set_G_2d: set_G_2d,
  set_G_3d: set_G_3d,
  __wbindgen_memory: __wbindgen_memory
};

function wasmNoSIMD_bg(imports){return _loadWasmModule(0, null, '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YXNtX2JpbmRnZW46Ol9fd2JpbmRnZW5fbWVtb3J5OjpoYmQ3ZTI3ZWZkNjg0MzEwYQE6ZGxtYWxsb2M6OmRsbWFsbG9jOjpEbG1hbGxvYzxBPjo6bWFsbG9jOjpoN2Y5MWQ2NzMxNjNhNzQwNQI4ZGxtYWxsb2M6OmRsbWFsbG9jOjpEbG1hbGxvYzxBPjo6ZnJlZTo6aDlhYzNlOWYxZjU4MmQyMmQDQWRsbWFsbG9jOjpkbG1hbGxvYzo6RGxtYWxsb2M8QT46OmRpc3Bvc2VfY2h1bms6OmgzYTMwODEzYThmYjUzMWI2BApjb21wdXRlXzNkBSFjcmVhdGVfZGVyaXZhdGl2ZV9jb21wdXRlcl9jdHhfM2QGIWNyZWF0ZV9kZXJpdmF0aXZlX2NvbXB1dGVyX2N0eF8yZAcOX19ydXN0X3JlYWxsb2MICmNvbXB1dGVfMmQJFGNvbXB1dGVfc3RlcF9zaXplXzNkCkdkZXJpdmF0aXZlX2NvbXB1dGVyOjpDb250ZXh0PF8+OjphcHBseV9kaXNwbGFjZW1lbnRzOjpoZGY5ZDZkNjNjNDVkNTlmNgsUY29tcHV0ZV9zdGVwX3NpemVfMmQMR2Rlcml2YXRpdmVfY29tcHV0ZXI6OkNvbnRleHQ8Xz46OmFwcGx5X2Rpc3BsYWNlbWVudHM6Omg5ZjU1OTUzZGU5ODQwNzcwDShhbGxvYzo6dmVjOjpmcm9tX2VsZW06OmhkYzQxMTkwZGNmODY3NWNmDk5hbGxvYzo6cmF3X3ZlYzo6UmF3VmVjPFQsQT46OnJlc2VydmU6OmRvX3Jlc2VydmVfYW5kX2hhbmRsZTo6aDM1MmExOWYzOGZkZmMxOTAPDWFwcGx5X2xvY2tfM2QQLmFsbG9jOjpyYXdfdmVjOjpmaW5pc2hfZ3Jvdzo6aGZkNWE3YTYxNjkzOTU5OTkRDWFwcGx5X2xvY2tfMmQSN3N0ZDo6cGFuaWNraW5nOjpydXN0X3BhbmljX3dpdGhfaG9vazo6aDg5NGYyYmRlZWE0ZDBjZTgTCHNldF9HXzJkFCljb3JlOjpwYW5pY2tpbmc6OnBhbmljOjpoYTJmMjI5ZDc3N2ExODBjORUGbWVtY3B5FhFydXN0X2JlZ2luX3Vud2luZBctY29yZTo6cGFuaWNraW5nOjpwYW5pY19mbXQ6OmgwZGZlMTUzZWIwZWY0NTZhGElzdGQ6OnN5c19jb21tb246OmJhY2t0cmFjZTo6X19ydXN0X2VuZF9zaG9ydF9iYWNrdHJhY2U6Omg4M2E0MDMyYzZiOTk3NDQ2GQZtZW1zZXQaEV9fd2JpbmRnZW5fbWFsbG9jGw9fX3diaW5kZ2VuX2ZyZWUcNGFsbG9jOjpyYXdfdmVjOjpjYXBhY2l0eV9vdmVyZmxvdzo6aDkzODA0N2UxMWJhYmE4YjEdH19fd2JpbmRnZW5fYWRkX3RvX3N0YWNrX3BvaW50ZXIeCGdldF9EXzJkHwhnZXRfZ18yZCAKZ2V0X21lbW9yeSExPFQgYXMgY29yZTo6YW55OjpBbnk+Ojp0eXBlX2lkOjpoZDU0YmJmNTkwMjk4Y2ZjMiI3c3RkOjphbGxvYzo6ZGVmYXVsdF9hbGxvY19lcnJvcl9ob29rOjpoYmRhMGM4ZGVhYTE5MGJhMyNvY29yZTo6cHRyOjpkcm9wX2luX3BsYWNlPCZjb3JlOjppdGVyOjphZGFwdGVyczo6Y29waWVkOjpDb3BpZWQ8Y29yZTo6c2xpY2U6Oml0ZXI6Okl0ZXI8dTg+Pj46OmgyODk3NGZhNmYwMzIzMTcy', imports)}

var setWasm$1 = function setWasm(wasmModule) {
  try {
    return Promise.resolve(WebAssembly.instantiate(wasmModule, {
      "./derivative_computer_bg.js": {
        __wbindgen_memory: __wbindgen_memory$1
      }
    })).then(function (inst) {
      wasm$1 = inst.exports;
    });
  } catch (e) {
    return Promise.reject(e);
  }
};
var wasm$1;
var heap$1 = /*#__PURE__*/new Array(32).fill(undefined);
heap$1.push(undefined, null, true, false);
var heap_next$1 = heap$1.length;

function addHeapObject$1(obj) {
  if (heap_next$1 === heap$1.length) heap$1.push(heap$1.length + 1);
  var idx = heap_next$1;
  heap_next$1 = heap$1[idx];
  heap$1[idx] = obj;
  return idx;
}

var cachegetFloat32Memory0$1 = null;

function getFloat32Memory0$1() {
  if (cachegetFloat32Memory0$1 === null || cachegetFloat32Memory0$1.buffer !== wasm$1.memory.buffer) {
    cachegetFloat32Memory0$1 = new Float32Array(wasm$1.memory.buffer);
  }

  return cachegetFloat32Memory0$1;
}

var WASM_VECTOR_LEN$1 = 0;

function passArrayF32ToWasm0$1(arg, malloc) {
  var ptr = malloc(arg.length * 4);
  getFloat32Memory0$1().set(arg, ptr / 4);
  WASM_VECTOR_LEN$1 = arg.length;
  return ptr;
}
/**
* @param {number} node_count
* @param {Float32Array} D
* @param {Float32Array} G
* @returns {number}
*/


function create_derivative_computer_ctx_2d$1(node_count, D, G) {
  var ptr0 = passArrayF32ToWasm0$1(D, wasm$1.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN$1;
  var ptr1 = passArrayF32ToWasm0$1(G, wasm$1.__wbindgen_malloc);
  var len1 = WASM_VECTOR_LEN$1;
  var ret = wasm$1.create_derivative_computer_ctx_2d(node_count, ptr0, len0, ptr1, len1);
  return ret;
}
/**
* @param {number} node_count
* @param {Float32Array} D
* @param {Float32Array} G
* @returns {number}
*/

function create_derivative_computer_ctx_3d$1(node_count, D, G) {
  var ptr0 = passArrayF32ToWasm0$1(D, wasm$1.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN$1;
  var ptr1 = passArrayF32ToWasm0$1(G, wasm$1.__wbindgen_malloc);
  var len1 = WASM_VECTOR_LEN$1;
  var ret = wasm$1.create_derivative_computer_ctx_3d(node_count, ptr0, len0, ptr1, len1);
  return ret;
}
var cachegetInt32Memory0$1 = null;

function getInt32Memory0$1() {
  if (cachegetInt32Memory0$1 === null || cachegetInt32Memory0$1.buffer !== wasm$1.memory.buffer) {
    cachegetInt32Memory0$1 = new Int32Array(wasm$1.memory.buffer);
  }

  return cachegetInt32Memory0$1;
}

function getArrayF32FromWasm0$1(ptr, len) {
  return getFloat32Memory0$1().subarray(ptr / 4, ptr / 4 + len);
}
/**
* @param {number} ctx_ptr
* @param {Float32Array} x
* @returns {Float32Array}
*/


function compute_2d$1(ctx_ptr, x) {
  try {
    var retptr = wasm$1.__wbindgen_add_to_stack_pointer(-16);

    var ptr0 = passArrayF32ToWasm0$1(x, wasm$1.__wbindgen_malloc);
    var len0 = WASM_VECTOR_LEN$1;
    wasm$1.compute_2d(retptr, ctx_ptr, ptr0, len0);
    var r0 = getInt32Memory0$1()[retptr / 4 + 0];
    var r1 = getInt32Memory0$1()[retptr / 4 + 1];
    var v1 = getArrayF32FromWasm0$1(r0, r1).slice();

    wasm$1.__wbindgen_free(r0, r1 * 4);

    return v1;
  } finally {
    wasm$1.__wbindgen_add_to_stack_pointer(16);
  }
}
/**
* @param {number} ctx_ptr
* @param {Float32Array} x
* @returns {Float32Array}
*/

function compute_3d$1(ctx_ptr, x) {
  try {
    var retptr = wasm$1.__wbindgen_add_to_stack_pointer(-16);

    var ptr0 = passArrayF32ToWasm0$1(x, wasm$1.__wbindgen_malloc);
    var len0 = WASM_VECTOR_LEN$1;
    wasm$1.compute_3d(retptr, ctx_ptr, ptr0, len0);
    var r0 = getInt32Memory0$1()[retptr / 4 + 0];
    var r1 = getInt32Memory0$1()[retptr / 4 + 1];
    var v1 = getArrayF32FromWasm0$1(r0, r1).slice();

    wasm$1.__wbindgen_free(r0, r1 * 4);

    return v1;
  } finally {
    wasm$1.__wbindgen_add_to_stack_pointer(16);
  }
}
/**
* @param {number} ctx_ptr
* @param {number} u
* @param {number} p_0
* @param {number} p_1
* @param {number} x_0_u
* @param {number} x_1_u
*/

function apply_lock_2d$1(ctx_ptr, u, p_0, p_1, x_0_u, x_1_u) {
  wasm$1.apply_lock_2d(ctx_ptr, u, p_0, p_1, x_0_u, x_1_u);
}
/**
* @param {number} ctx_ptr
* @param {number} u
* @param {number} p_0
* @param {number} p_1
* @param {number} p_2
* @param {number} x_0_u
* @param {number} x_1_u
* @param {number} x_2_u
*/

function apply_lock_3d$1(ctx_ptr, u, p_0, p_1, p_2, x_0_u, x_1_u, x_2_u) {
  wasm$1.apply_lock_3d(ctx_ptr, u, p_0, p_1, p_2, x_0_u, x_1_u, x_2_u);
}
/**
* @param {number} ctx_ptr
* @returns {number}
*/

function compute_step_size_2d$1(ctx_ptr) {
  var ret = wasm$1.compute_step_size_2d(ctx_ptr);
  return ret;
}
/**
* @param {number} ctx_ptr
* @returns {number}
*/

function compute_step_size_3d$1(ctx_ptr) {
  var ret = wasm$1.compute_step_size_3d(ctx_ptr);
  return ret;
}

function getObject$1(idx) {
  return heap$1[idx];
}

function dropObject$1(idx) {
  if (idx < 36) return;
  heap$1[idx] = heap_next$1;
  heap_next$1 = idx;
}

function takeObject$1(idx) {
  var ret = getObject$1(idx);
  dropObject$1(idx);
  return ret;
}
/**
* @returns {any}
*/


function get_memory$1() {
  var ret = wasm$1.get_memory();
  return takeObject$1(ret);
}
/**
* @param {number} ctx
* @returns {number}
*/

function get_D_2d$1(ctx) {
  var ret = wasm$1.get_D_2d(ctx);
  return ret;
}
/**
* @param {number} ctx
* @returns {number}
*/

function get_D_3d$1(ctx) {
  var ret = wasm$1.get_D_2d(ctx);
  return ret;
}
/**
* @param {number} ctx
* @returns {number}
*/

function get_g_2d$1(ctx) {
  var ret = wasm$1.get_g_2d(ctx);
  return ret;
}
/**
* @param {number} ctx
* @returns {number}
*/

function get_g_3d$1(ctx) {
  var ret = wasm$1.get_g_2d(ctx);
  return ret;
}
/**
* @param {number} ctx
* @param {Float32Array} new_G
*/

function set_G_2d$1(ctx, new_G) {
  var ptr0 = passArrayF32ToWasm0$1(new_G, wasm$1.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN$1;
  wasm$1.set_G_2d(ctx, ptr0, len0);
}
/**
* @param {number} ctx
* @param {Float32Array} new_G
*/

function set_G_3d$1(ctx, new_G) {
  var ptr0 = passArrayF32ToWasm0$1(new_G, wasm$1.__wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN$1;
  wasm$1.set_G_2d(ctx, ptr0, len0);
}
var __wbindgen_memory$1 = function __wbindgen_memory() {
  var ret = wasm$1.memory;
  return addHeapObject$1(ret);
};



var wasmNoSIMD = {
  __proto__: null,
  setWasm: setWasm$1,
  create_derivative_computer_ctx_2d: create_derivative_computer_ctx_2d$1,
  create_derivative_computer_ctx_3d: create_derivative_computer_ctx_3d$1,
  compute_2d: compute_2d$1,
  compute_3d: compute_3d$1,
  apply_lock_2d: apply_lock_2d$1,
  apply_lock_3d: apply_lock_3d$1,
  compute_step_size_2d: compute_step_size_2d$1,
  compute_step_size_3d: compute_step_size_3d$1,
  get_memory: get_memory$1,
  get_D_2d: get_D_2d$1,
  get_D_3d: get_D_3d$1,
  get_g_2d: get_g_2d$1,
  get_g_3d: get_g_3d$1,
  set_G_2d: set_G_2d$1,
  set_G_3d: set_G_3d$1,
  __wbindgen_memory: __wbindgen_memory$1
};

/**
 * Loads the WebAssembly module that performs the derivative computations for `descent.ts`
 */

var getHasSIMDSupport = function getHasSIMDSupport() {
  try {
    return Promise.resolve(WebAssembly.validate(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 10, 9, 1, 7, 0, 65, 0, 253, 15, 26, 11])));
  } catch (e) {
    return Promise.reject(e);
  }
};

var AsyncOnce = /*#__PURE__*/function () {
  function AsyncOnce(getter) {
    this.pending = null;
    this.getter = getter;
  }

  var _proto = AsyncOnce.prototype;

  _proto.get = function get() {
    try {
      var _this2 = this;

      if (_this2.res) {
        return Promise.resolve(_this2.res.value);
      }

      if (_this2.pending) {
        return Promise.resolve(_this2.pending);
      }

      _this2.pending = new Promise(function (resolve) {
        return _this2.getter().then(function (res) {
          _this2.res = {
            value: res
          };
          _this2.pending = null;
          resolve(res);
        });
      });
      return Promise.resolve(_this2.pending);
    } catch (e) {
      return Promise.reject(e);
    }
  };

  return AsyncOnce;
}();

var WasmInst = /*#__PURE__*/new AsyncOnce(function () {
  try {
    return Promise.resolve(getHasSIMDSupport()).then(function (hasWasmSIMDSupport) {
      if (!window.location.href.includes('localhost')) {
        console.log(hasWasmSIMDSupport ? 'Wasm SIMD support detected!' : 'Wasm SIMD support NOT detected; using non-SIMD Wasm');
      }

      if (hasWasmSIMDSupport) {
        return Promise.resolve(wasmSIMD_bg()).then(function (wasmModule) {
          setWasm(wasmModule);
          return wasmSIMD;
        });
      } else {
        return Promise.resolve(wasmNoSIMD_bg()).then(function (wasmModule) {
          setWasm$1(wasmModule);
          return wasmNoSIMD;
        });
      }
    });
  } catch (e) {
    return Promise.reject(e);
  }
});
var getDerivativeComputerWasm = function getDerivativeComputerWasm() {
  return WasmInst.get();
};

var wasmInstPromise = /*#__PURE__*/getDerivativeComputerWasm();
/**
 * The layout process fires three events:
 *  - start: layout iterations started
 *  - tick: fired once per iteration, listen to this to animate
 *  - end: layout converged, you might like to zoom-to-fit or something at notification of this event
 */

var EventType;

(function (EventType) {
  EventType[EventType["start"] = 0] = "start";
  EventType[EventType["tick"] = 1] = "tick";
  EventType[EventType["end"] = 2] = "end";
})(EventType || (EventType = {}));

function isGroup(g) {
  return typeof g.leaves !== 'undefined' || typeof g.groups !== 'undefined';
}
/**
 * Main interface to cola layout.
 * @class Layout
 */


var Layout = /*#__PURE__*/function () {
  function Layout() {
    var _this = this;

    this._canvasSize = [1, 1];
    this._linkDistance = 20;
    this._defaultNodeSize = 10;
    this._linkLengthCalculator = null;
    this._linkType = null;
    this._avoidOverlaps = false;
    this._handleDisconnected = true;
    this._running = false;
    this._nodes = [];
    this._groups = [];
    this._rootGroup = null;
    this._links = [];
    this._constraints = [];
    this._distanceMatrix = null;
    this._descent = null;
    this._directedLinkConstraints = null;
    this._threshold = 0.01;
    this._visibilityGraph = null;
    this._groupCompactness = 1e-6; // sub-class and override this property to replace with a more sophisticated eventing mechanism

    this.event = null;
    this.linkAccessor = {
      getSourceIndex: Layout.getSourceIndex,
      getTargetIndex: Layout.getTargetIndex,
      setLength: Layout.setLinkLength,
      getType: function getType(l) {
        return typeof _this._linkType === "function" ? _this._linkType(l) : 0;
      }
    };
  } // subscribe a listener to an event
  // sub-class and override this method to replace with a more sophisticated eventing mechanism


  var _proto = Layout.prototype;

  _proto.on = function on(e, listener) {
    // override me!
    if (!this.event) this.event = {};

    if (typeof e === 'string') {
      this.event[EventType[e]] = listener;
    } else {
      this.event[e] = listener;
    }

    return this;
  } // a function that is notified of events like "tick"
  // sub-classes can override this method to replace with a more sophisticated eventing mechanism
  ;

  _proto.trigger = function trigger(e) {
    if (this.event && typeof this.event[e.type] !== 'undefined') {
      this.event[e.type](e);
    }
  } // a function that kicks off the iteration tick loop
  // it calls tick() repeatedly until tick returns true (is converged)
  // subclass and override it with something fancier (e.g. dispatch tick on a timer)
  ;

  _proto.kick = function kick() {
    while (!this.tick()) {
    }
  }
  /**
   * iterate the layout.  Returns true when layout converged.
   */
  ;

  _proto.tick = function tick() {
    if (this._alpha < this._threshold) {
      this._running = false;
      this.trigger({
        type: EventType.end,
        alpha: this._alpha = 0,
        stress: this._lastStress
      });
      return true;
    }

    var n = this._nodes.length;
    var o, i;

    this._descent.locks.clear();

    for (i = 0; i < n; ++i) {
      o = this._nodes[i];

      if (o.fixed) {
        if (typeof o.px === 'undefined' || typeof o.py === 'undefined') {
          o.px = o.x;
          o.py = o.y;
        }

        var p = [o.px, o.py];

        this._descent.locks.add(i, p);
      }
    }

    var s1 = this._descent.rungeKutta(); //var s1 = descent.reduceStress();


    if (s1 === 0) {
      this._alpha = 0;
    } else if (typeof this._lastStress !== 'undefined') {
      this._alpha = s1; //Math.abs(Math.abs(this._lastStress / s1) - 1);
    }

    this._lastStress = s1;
    this.updateNodePositions();
    this.trigger({
      type: EventType.tick,
      alpha: this._alpha,
      stress: this._lastStress
    });
    return false;
  } // copy positions out of descent instance into each of the nodes' center coords
  ;

  _proto.updateNodePositions = function updateNodePositions() {
    var x = this._descent.x[0],
        y = this._descent.x[1];
    var o,
        i = this._nodes.length;

    while (i--) {
      o = this._nodes[i];
      o.x = x[i];
      o.y = y[i];
    }
  };

  _proto.nodes = function nodes(v) {
    if (!v) {
      if (this._nodes.length === 0 && this._links.length > 0) {
        // if we have links but no nodes, create the nodes array now with empty objects for the links to point at.
        // in this case the links are expected to be numeric indices for nodes in the range 0..n-1 where n is the number of nodes
        var n = 0;

        this._links.forEach(function (l) {
          n = Math.max(n, l.source, l.target);
        });

        this._nodes = new Array(++n);

        for (var i = 0; i < n; ++i) {
          this._nodes[i] = {};
        }
      }

      return this._nodes;
    }

    this._nodes = v;
    return this;
  };

  _proto.groups = function groups(x) {
    var _this2 = this;

    if (!x) return this._groups;
    this._groups = x;
    this._rootGroup = {};

    this._groups.forEach(function (g) {
      if (typeof g.padding === "undefined") g.padding = 1;

      if (typeof g.leaves !== "undefined") {
        g.leaves.forEach(function (v, i) {
          if (typeof v === 'number') (g.leaves[i] = _this2._nodes[v]).parent = g;
        });
      }

      if (typeof g.groups !== "undefined") {
        g.groups.forEach(function (gi, i) {
          if (typeof gi === 'number') (g.groups[i] = _this2._groups[gi]).parent = g;
        });
      }
    });

    this._rootGroup.leaves = this._nodes.filter(function (v) {
      return typeof v.parent === 'undefined';
    });
    this._rootGroup.groups = this._groups.filter(function (g) {
      return typeof g.parent === 'undefined';
    });
    return this;
  };

  _proto.powerGraphGroups = function powerGraphGroups(f) {
    var g = getGroups(this._nodes, this._links, this.linkAccessor, this._rootGroup);
    this.groups(g.groups);
    f(g);
    return this;
  };

  _proto.avoidOverlaps = function avoidOverlaps(v) {
    if (!arguments.length) return this._avoidOverlaps;
    this._avoidOverlaps = v;
    return this;
  };

  _proto.handleDisconnected = function handleDisconnected(v) {
    if (!arguments.length) return this._handleDisconnected;
    this._handleDisconnected = v;
    return this;
  }
  /**
   * causes constraints to be generated such that directed graphs are laid out either from left-to-right or top-to-bottom.
   * a separation constraint is generated in the selected axis for each edge that is not involved in a cycle (part of a strongly connected component)
   * @param axis {string} 'x' for left-to-right, 'y' for top-to-bottom
   * @param minSeparation {number|link=>number} either a number specifying a minimum spacing required across all links or a function to return the minimum spacing for each link
   */
  ;

  _proto.flowLayout = function flowLayout(axis, minSeparation) {
    if (!arguments.length) axis = 'y';
    this._directedLinkConstraints = {
      axis: axis,
      getMinSeparation: typeof minSeparation === 'number' ? function () {
        return minSeparation;
      } : minSeparation
    };
    return this;
  };

  _proto.links = function links(x) {
    if (!arguments.length) return this._links;
    this._links = x;
    return this;
  };

  _proto.constraints = function constraints(c) {
    if (!arguments.length) return this._constraints;
    this._constraints = c;
    return this;
  };

  _proto.distanceMatrix = function distanceMatrix(d) {
    if (!arguments.length) return this._distanceMatrix;
    this._distanceMatrix = d;
    return this;
  };

  _proto.size = function size(x) {
    if (!x) return this._canvasSize;
    this._canvasSize = x;
    return this;
  };

  _proto.defaultNodeSize = function defaultNodeSize(x) {
    if (!x) return this._defaultNodeSize;
    this._defaultNodeSize = x;
    return this;
  };

  _proto.groupCompactness = function groupCompactness(x) {
    if (!x) return this._groupCompactness;
    this._groupCompactness = x;
    return this;
  };

  _proto.linkDistance = function linkDistance(x) {
    if (!x) {
      return this._linkDistance;
    }

    this._linkDistance = typeof x === "function" ? x : +x;
    this._linkLengthCalculator = null;
    return this;
  };

  _proto.linkType = function linkType(f) {
    this._linkType = f;
    return this;
  };

  _proto.convergenceThreshold = function convergenceThreshold(x) {
    if (!x) return this._threshold;
    this._threshold = typeof x === "function" ? x : +x;
    return this;
  };

  _proto.alpha = function alpha(x) {
    if (!arguments.length) return this._alpha;else {
      x = +x;

      if (this._alpha) {
        // if we're already running
        if (x > 0) this._alpha = x; // we might keep it hot
        else this._alpha = 0; // or, next tick will dispatch "end"
      } else if (x > 0) {
        // otherwise, fire it up!
        if (!this._running) {
          this._running = true;
          this.trigger({
            type: EventType.start,
            alpha: this._alpha = x
          });
          this.kick();
        }
      }

      return this;
    }
  };

  _proto.getLinkLength = function getLinkLength(link) {
    return typeof this._linkDistance === "function" ? +this._linkDistance(link) : this._linkDistance;
  };

  Layout.setLinkLength = function setLinkLength(link, length) {
    link.length = length;
  };

  _proto.getLinkType = function getLinkType(link) {
    return typeof this._linkType === "function" ? this._linkType(link) : 0;
  }
  /**
   * compute an ideal length for each link based on the graph structure around that link.
   * you can use this (for example) to create extra space around hub-nodes in dense graphs.
   * In particular this calculation is based on the "symmetric difference" in the neighbour sets of the source and target:
   * i.e. if neighbours of source is a and neighbours of target are b then calculation is: sqrt(|a union b| - |a intersection b|)
   * Actual computation based on inspection of link structure occurs in start(), so links themselves
   * don't have to have been assigned before invoking this function.
   * @param {number} [idealLength] the base length for an edge when its source and start have no other common neighbours (e.g. 40)
   * @param {number} [w] a multiplier for the effect of the length adjustment (e.g. 0.7)
   */
  ;

  _proto.symmetricDiffLinkLengths = function symmetricDiffLinkLengths$1(idealLength, w) {
    var _this3 = this;

    if (w === void 0) {
      w = 1;
    }

    this.linkDistance(function (l) {
      return idealLength * l.length;
    });

    this._linkLengthCalculator = function () {
      return symmetricDiffLinkLengths(_this3._links, _this3.linkAccessor, w);
    };

    return this;
  }
  /**
   * compute an ideal length for each link based on the graph structure around that link.
   * you can use this (for example) to create extra space around hub-nodes in dense graphs.
   * In particular this calculation is based on the "symmetric difference" in the neighbour sets of the source and target:
   * i.e. if neighbours of source is a and neighbours of target are b then calculation is: |a intersection b|/|a union b|
   * Actual computation based on inspection of link structure occurs in start(), so links themselves
   * don't have to have been assigned before invoking this function.
   * @param {number} [idealLength] the base length for an edge when its source and start have no other common neighbours (e.g. 40)
   * @param {number} [w] a multiplier for the effect of the length adjustment (e.g. 0.7)
   */
  ;

  _proto.jaccardLinkLengths = function jaccardLinkLengths$1(idealLength, w) {
    var _this4 = this;

    if (w === void 0) {
      w = 1;
    }

    this.linkDistance(function (l) {
      return idealLength * l.length;
    });

    this._linkLengthCalculator = function () {
      return jaccardLinkLengths(_this4._links, _this4.linkAccessor, w);
    };

    return this;
  }
  /**
   * start the layout process
   * @method start
   * @param {number} [initialUnconstrainedIterations=0] unconstrained initial layout iterations
   * @param {number} [initialUserConstraintIterations=0] initial layout iterations with user-specified constraints
   * @param {number} [initialAllConstraintsIterations=0] initial layout iterations with all constraints including non-overlap
   * @param {number} [gridSnapIterations=0] iterations of "grid snap", which pulls nodes towards grid cell centers - grid of size node[0].width - only really makes sense if all nodes have the same width and height
   * @param [keepRunning=true] keep iterating shronously via the tick method
   * @param [centerGraph=true] Center graph on restart
   */
  ;

  _proto.start = function start(initialUnconstrainedIterations, initialUserConstraintIterations, initialAllConstraintsIterations, gridSnapIterations, keepRunning, centerGraph) {
    if (initialUnconstrainedIterations === void 0) {
      initialUnconstrainedIterations = 0;
    }

    if (initialUserConstraintIterations === void 0) {
      initialUserConstraintIterations = 0;
    }

    if (initialAllConstraintsIterations === void 0) {
      initialAllConstraintsIterations = 0;
    }

    if (keepRunning === void 0) {
      keepRunning = true;
    }

    if (centerGraph === void 0) {
      centerGraph = true;
    }

    try {
      var _this6 = this;

      var i, j, n, N, m, w, h, i, i;
      n = _this6.nodes().length;
      N = n + 2 * _this6._groups.length;
      m = _this6._links.length;
      w = _this6._canvasSize[0];
      h = _this6._canvasSize[1];
      var x = new Array(N),
          y = new Array(N);
      var G = null;
      var ao = _this6._avoidOverlaps;

      _this6._nodes.forEach(function (v, i) {
        v.index = i;

        if (typeof v.x === 'undefined') {
          v.x = w / 2, v.y = h / 2;
        }

        x[i] = v.x, y[i] = v.y;
      });

      if (_this6._linkLengthCalculator) _this6._linkLengthCalculator(); //should we do this to clearly label groups?
      //this._groups.forEach((g, i) => g.groupIndex = i);

      var distances;

      if (_this6._distanceMatrix) {
        // use the user specified distanceMatrix
        distances = _this6._distanceMatrix;
      } else {
        // construct an n X n distance matrix based on shortest paths through graph (with respect to edge.length).
        distances = new Calculator(N, _this6._links, Layout.getSourceIndex, Layout.getTargetIndex, function (l) {
          return _this6.getLinkLength(l);
        }).DistanceMatrix(); // G is a square matrix with G[i][j] = 1 iff there exists an edge between node i and node j
        // otherwise 2. (

        G = Descent.createSquareMatrix(N, function () {
          return 2;
        });

        _this6._links.forEach(function (l) {
          if (typeof l.source == "number") l.source = _this6._nodes[l.source];
          if (typeof l.target == "number") l.target = _this6._nodes[l.target];
        });

        _this6._links.forEach(function (e) {
          var u = Layout.getSourceIndex(e),
              v = Layout.getTargetIndex(e);
          G[u][v] = G[v][u] = e.weight || 1;
        });
      }

      var D = Descent.createSquareMatrix(N, function (i, j) {
        return distances[i][j];
      });

      if (_this6._rootGroup && typeof _this6._rootGroup.groups !== 'undefined') {
        i = n;

        var addAttraction = function addAttraction(i, j, strength, idealDistance) {
          G[i][j] = G[j][i] = strength;
          D[i][j] = D[j][i] = idealDistance;
        };

        _this6._groups.forEach(function (g) {
          addAttraction(i, i + 1, _this6._groupCompactness, 0.1); // todo: add terms here attracting children of the group to the group dummy nodes
          //if (typeof g.leaves !== 'undefined')
          //    g.leaves.forEach(l => {
          //        addAttraction(l.index, i, 1e-4, 0.1);
          //        addAttraction(l.index, i + 1, 1e-4, 0.1);
          //    });
          //if (typeof g.groups !== 'undefined')
          //    g.groups.forEach(g => {
          //        var gid = n + g.groupIndex * 2;
          //        addAttraction(gid, i, 0.1, 0.1);
          //        addAttraction(gid + 1, i, 0.1, 0.1);
          //        addAttraction(gid, i + 1, 0.1, 0.1);
          //        addAttraction(gid + 1, i + 1, 0.1, 0.1);
          //    });

          if (typeof g.bounds === 'undefined') {
            x[i] = w / 2, y[i++] = h / 2;
            x[i] = w / 2, y[i++] = h / 2;
          } else {
            x[i] = g.bounds.x, y[i++] = g.bounds.y;
            x[i] = g.bounds.X, y[i++] = g.bounds.Y;
          }
        });
      } else _this6._rootGroup = {
        leaves: _this6._nodes,
        groups: []
      };

      var curConstraints = _this6._constraints || [];

      if (_this6._directedLinkConstraints) {
        _this6.linkAccessor.getMinSeparation = _this6._directedLinkConstraints.getMinSeparation;
        curConstraints = curConstraints.concat(generateDirectedEdgeConstraints(n, _this6._links, _this6._directedLinkConstraints.axis, _this6.linkAccessor)); // todo: add containment constraints between group dummy nodes and their children
      }

      _this6.avoidOverlaps(false);

      return Promise.resolve(wasmInstPromise).then(function (wasmInst) {
        _this6._descent = new Descent([x, y], D, undefined, wasmInst);

        _this6._descent.locks.clear();

        for (i = 0; i < n; ++i) {
          var o = _this6._nodes[i];

          if (o.fixed) {
            o.px = o.x;
            o.py = o.y;
            var p = [o.x, o.y];

            _this6._descent.locks.add(i, p);
          }
        }

        _this6._descent.threshold = _this6._threshold; // apply initialIterations without user constraints or nonoverlap constraints
        // if groups are specified, dummy nodes and edges will be added to untangle
        // with respect to group connectivity

        _this6.initialLayout(initialUnconstrainedIterations, x, y); // apply initialIterations with user constraints but no nonoverlap constraints


        if (curConstraints.length > 0) _this6._descent.project = new Projection(_this6._nodes, _this6._groups, _this6._rootGroup, curConstraints).projectFunctions();

        _this6._descent.run(initialUserConstraintIterations);

        _this6.separateOverlappingComponents(w, h, centerGraph); // subsequent iterations will apply all constraints


        _this6.avoidOverlaps(ao);

        if (ao) {
          _this6._nodes.forEach(function (v, i) {
            v.x = x[i], v.y = y[i];
          });

          _this6._descent.project = new Projection(_this6._nodes, _this6._groups, _this6._rootGroup, curConstraints, true).projectFunctions();

          _this6._nodes.forEach(function (v, i) {
            x[i] = v.x, y[i] = v.y;
          });
        } // allow not immediately connected nodes to relax apart (p-stress)


        _this6._descent.G = G;

        _this6._descent.run(initialAllConstraintsIterations); // TODO
        // if (gridSnapIterations) {
        //     this._descent.snapStrength = 1000;
        //     this._descent.snapGridSize = this._nodes[0].width;
        //     this._descent.numGridSnapNodes = n;
        //     this._descent.scaleSnapByMaxH = n != N; // if we have groups then need to scale hessian so grid forces still apply
        //     var G0 = Descent.createSquareMatrix(N,(i, j) => {
        //         if (i >= n || j >= n) return G[i][j];
        //         return 0
        //     });
        //     this._descent.G = G0;
        //     this._descent.run(gridSnapIterations);
        // }


        _this6.updateNodePositions();

        _this6.separateOverlappingComponents(w, h, centerGraph);

        return keepRunning ? _this6.resume() : _this6;
      });
    } catch (e) {
      return Promise.reject(e);
    }
  };

  _proto.initialLayout = function initialLayout(iterations, x, y) {
    if (this._groups.length > 0 && iterations > 0) {
      // construct a flat graph with dummy nodes for the groups and edges connecting group dummy nodes to their children
      // todo: edges attached to groups are replaced with edges connected to the corresponding group dummy node
      var n = this._nodes.length;

      var edges = this._links.map(function (e) {
        return {
          source: e.source.index,
          target: e.target.index
        };
      });

      var vs = this._nodes.map(function (v) {
        return {
          index: v.index
        };
      });

      this._groups.forEach(function (g, i) {
        vs.push({
          index: g.index = n + i
        });
      });

      this._groups.forEach(function (g, i) {
        if (typeof g.leaves !== 'undefined') g.leaves.forEach(function (v) {
          return edges.push({
            source: g.index,
            target: v.index
          });
        });
        if (typeof g.groups !== 'undefined') g.groups.forEach(function (gg) {
          return edges.push({
            source: g.index,
            target: gg.index
          });
        });
      }); // layout the flat graph with dummy nodes and edges


      new Layout().size(this.size()).nodes(vs).links(edges).avoidOverlaps(false).linkDistance(this.linkDistance()).symmetricDiffLinkLengths(5).convergenceThreshold(1e-4).start(iterations, 0, 0, 0, false);

      this._nodes.forEach(function (v) {
        x[v.index] = vs[v.index].x;
        y[v.index] = vs[v.index].y;
      });
    } else {
      this._descent.run(iterations);
    }
  } // recalculate nodes position for disconnected graphs
  ;

  _proto.separateOverlappingComponents = function separateOverlappingComponents(width, height, centerGraph) {
    var _this7 = this;

    if (centerGraph === void 0) {
      centerGraph = true;
    }

    // recalculate nodes position for disconnected graphs
    if (!this._distanceMatrix && this._handleDisconnected) {
      var x = this._descent.x[0],
          y = this._descent.x[1];

      this._nodes.forEach(function (v, i) {
        v.x = x[i], v.y = y[i];
      });

      var graphs = separateGraphs(this._nodes, this._links);
      applyPacking(graphs, width, height, this._defaultNodeSize, 1, centerGraph);

      this._nodes.forEach(function (v, i) {
        _this7._descent.x[0][i] = v.x, _this7._descent.x[1][i] = v.y;

        if (v.bounds) {
          v.bounds.setXCentre(v.x);
          v.bounds.setYCentre(v.y);
        }
      });
    }
  };

  _proto.resume = function resume() {
    return this.alpha(0.1);
  };

  _proto.stop = function stop() {
    return this.alpha(0);
  } /// find a visibility graph over the set of nodes.  assumes all nodes have a
  /// bounds property (a rectangle) and that no pair of bounds overlaps.
  ;

  _proto.prepareEdgeRouting = function prepareEdgeRouting(nodeMargin) {
    if (nodeMargin === void 0) {
      nodeMargin = 0;
    }

    this._visibilityGraph = new TangentVisibilityGraph(this._nodes.map(function (v) {
      return v.bounds.inflate(-nodeMargin).vertices();
    }));
  }
  /**
   * find a route avoiding node bounds for the given edge.
   * assumes the visibility graph has been created (by prepareEdgeRouting method)
   * and also assumes that nodes have an index property giving their position in the
   * node array.  This index property is created by the start() method.
   * @param [edge] The edge to generate a route for.
   * @param {number} [ah] The size of the arrow head, a distance to shorten the end
   *                      of the edge by.  Defaults to 5.
   */
  ;

  _proto.routeEdge = function routeEdge(edge, ah, draw) {
    if (ah === void 0) {
      ah = 5;
    }

    var lineData = []; //if (d.source.id === 10 && d.target.id === 11) {
    //    debugger;
    //}

    var vg2 = new TangentVisibilityGraph(this._visibilityGraph.P, {
      V: this._visibilityGraph.V,
      E: this._visibilityGraph.E
    }),
        port1 = {
      x: edge.source.x,
      y: edge.source.y
    },
        port2 = {
      x: edge.target.x,
      y: edge.target.y
    },
        start = vg2.addPoint(port1, edge.source.index),
        end = vg2.addPoint(port2, edge.target.index);
    vg2.addEdgeIfVisible(port1, port2, edge.source.index, edge.target.index);

    if (typeof draw !== 'undefined') {
      draw(vg2);
    }

    var sourceInd = function sourceInd(e) {
      return e.source.id;
    },
        targetInd = function targetInd(e) {
      return e.target.id;
    },
        length = function length(e) {
      return e.length();
    },
        spCalc = new Calculator(vg2.V.length, vg2.E, sourceInd, targetInd, length),
        shortestPath = spCalc.PathFromNodeToNode(start.id, end.id);

    if (shortestPath.length === 1 || shortestPath.length === vg2.V.length) {
      var route = makeEdgeBetween(edge.source.innerBounds, edge.target.innerBounds, ah);
      lineData = [route.sourceIntersection, route.arrowStart];
    } else {
      var n = shortestPath.length - 2,
          p = vg2.V[shortestPath[n]].p,
          q = vg2.V[shortestPath[0]].p,
          lineData = [edge.source.innerBounds.rayIntersection(p.x, p.y)];

      for (var i = n; i >= 0; --i) {
        lineData.push(vg2.V[shortestPath[i]].p);
      }

      lineData.push(makeEdgeTo(q, edge.target.innerBounds, ah));
    } //lineData.forEach((v, i) => {
    //    if (i > 0) {
    //        var u = lineData[i - 1];
    //        this._nodes.forEach(function (node) {
    //            if (node.id === getSourceIndex(d) || node.id === getTargetIndex(d)) return;
    //            var ints = node.innerBounds.lineIntersections(u.x, u.y, v.x, v.y);
    //            if (ints.length > 0) {
    //                debugger;
    //            }
    //        })
    //    }
    //})


    return lineData;
  } //The link source and target may be just a node index, or they may be references to nodes themselves.
  ;

  Layout.getSourceIndex = function getSourceIndex(e) {
    return typeof e.source === 'number' ? e.source : e.source.index;
  } //The link source and target may be just a node index, or they may be references to nodes themselves.
  ;

  Layout.getTargetIndex = function getTargetIndex(e) {
    return typeof e.target === 'number' ? e.target : e.target.index;
  } // Get a string ID for a given link.
  ;

  Layout.linkId = function linkId(e) {
    return Layout.getSourceIndex(e) + "-" + Layout.getTargetIndex(e);
  } // The fixed property has three bits:
  // Bit 1 can be set externally (e.g., d.fixed = true) and show persist.
  // Bit 2 stores the dragging state, from mousedown to mouseup.
  // Bit 3 stores the hover state, from mouseover to mouseout.
  ;

  Layout.dragStart = function dragStart(d) {
    if (isGroup(d)) {
      Layout.storeOffset(d, Layout.dragOrigin(d));
    } else {
      Layout.stopNode(d);
      d.fixed |= 2; // set bit 2
    }
  } // we clobber any existing desired positions for nodes
  // in case another tick event occurs before the drag
  ;

  Layout.stopNode = function stopNode(v) {
    v.px = v.x;
    v.py = v.y;
  } // we store offsets for each node relative to the centre of the ancestor group
  // being dragged in a pair of properties on the node
  ;

  Layout.storeOffset = function storeOffset(d, origin) {
    if (typeof d.leaves !== 'undefined') {
      d.leaves.forEach(function (v) {
        v.fixed |= 2;
        Layout.stopNode(v);
        v._dragGroupOffsetX = v.x - origin.x;
        v._dragGroupOffsetY = v.y - origin.y;
      });
    }

    if (typeof d.groups !== 'undefined') {
      d.groups.forEach(function (g) {
        return Layout.storeOffset(g, origin);
      });
    }
  } // the drag origin is taken as the centre of the node or group
  ;

  Layout.dragOrigin = function dragOrigin(d) {
    if (isGroup(d)) {
      return {
        x: d.bounds.cx(),
        y: d.bounds.cy()
      };
    } else {
      return d;
    }
  } // for groups, the drag translation is propagated down to all of the children of
  // the group.
  ;

  Layout.drag = function drag(d, position) {
    if (isGroup(d)) {
      if (typeof d.leaves !== 'undefined') {
        d.leaves.forEach(function (v) {
          d.bounds.setXCentre(position.x);
          d.bounds.setYCentre(position.y);
          v.px = v._dragGroupOffsetX + position.x;
          v.py = v._dragGroupOffsetY + position.y;
        });
      }

      if (typeof d.groups !== 'undefined') {
        d.groups.forEach(function (g) {
          return Layout.drag(g, position);
        });
      }
    } else {
      d.px = position.x;
      d.py = position.y;
    }
  } // we unset only bits 2 and 3 so that the user can fix nodes with another a different
  // bit such that the lock persists between drags
  ;

  Layout.dragEnd = function dragEnd(d) {
    if (isGroup(d)) {
      if (typeof d.leaves !== 'undefined') {
        d.leaves.forEach(function (v) {
          Layout.dragEnd(v);
          delete v._dragGroupOffsetX;
          delete v._dragGroupOffsetY;
        });
      }

      if (typeof d.groups !== 'undefined') {
        d.groups.forEach(Layout.dragEnd);
      }
    } else {
      d.fixed &= ~6; // unset bits 2 and 3
      //d.fixed = 0;
    }
  } // in d3 hover temporarily locks nodes, currently not used in cola
  ;

  Layout.mouseOver = function mouseOver(d) {
    d.fixed |= 4; // set bit 3

    d.px = d.x, d.py = d.y; // set velocity to zero
  } // in d3 hover temporarily locks nodes, currently not used in cola
  ;

  Layout.mouseOut = function mouseOut(d) {
    d.fixed &= ~4; // unset bit 3
  };

  return Layout;
}();

var LayoutAdaptor = /*#__PURE__*/function (_Layout) {
  _inheritsLoose(LayoutAdaptor, _Layout);

  function LayoutAdaptor(options) {
    var _this;

    _this = _Layout.call(this) || this; // take in implementation as defined by client

    var self = _assertThisInitialized(_this);

    var o = options;

    if (o.trigger) {
      _this.trigger = o.trigger;
    }

    if (o.kick) {
      _this.kick = o.kick;
    }

    if (o.drag) {
      _this.drag = o.drag;
    }

    if (o.on) {
      _this.on = o.on;
    }

    _this.dragstart = _this.dragStart = Layout.dragStart;
    _this.dragend = _this.dragEnd = Layout.dragEnd;
    return _this;
  } // dummy functions in case not defined by client


  var _proto = LayoutAdaptor.prototype;

  _proto.trigger = function trigger(e) {};

  _proto.kick = function kick() {};

  _proto.drag = function drag() {};

  _proto.on = function on(eventType, listener) {
    return this;
  };

  return LayoutAdaptor;
}(Layout);
/**
 * provides an interface for use with any external graph system (e.g. Cytoscape.js):
 */

function adaptor(options) {
  return new LayoutAdaptor(options);
}

/**
 * @internal
 */

var D3StyleLayoutAdaptor = /*#__PURE__*/function (_Layout) {
  _inheritsLoose(D3StyleLayoutAdaptor, _Layout);

  function D3StyleLayoutAdaptor(d3Context) {
    var _this;

    if (d3Context === void 0) {
      d3Context = self.d3;
    }

    _this = _Layout.call(this) || this;
    _this.d3Context = d3Context;
    _this.event = d3Context.dispatch(EventType[EventType.start], EventType[EventType.tick], EventType[EventType.end]); // bit of trickyness remapping 'this' so we can reference it in the function body.

    var d3layout = _assertThisInitialized(_this);

    _this.drag = function () {
      if (!drag) {
        var drag = d3Context.behavior.drag().origin(Layout.dragOrigin).on("dragstart.d3adaptor", Layout.dragStart).on("drag.d3adaptor", function (d) {
          Layout.drag(d, d3layout.d3Context.event);
          d3layout.resume(); // restart annealing
        }).on("dragend.d3adaptor", Layout.dragEnd);
      }

      if (!arguments.length) return drag; // this is the context of the function, i.e. the d3 selection

      this //.on("mouseover.adaptor", colaMouseover)
      //.on("mouseout.adaptor", colaMouseout)
      .call(drag);
    };

    return _this;
  }

  var _proto = D3StyleLayoutAdaptor.prototype;

  _proto.trigger = function trigger(e) {
    var d3event = {
      type: EventType[e.type],
      alpha: e.alpha,
      stress: e.stress
    };
    this.event[d3event.type](d3event); // via d3 dispatcher, e.g. event.start(e);
  } // iterate layout using a d3.timer, which queues calls to tick repeatedly until tick returns true
  ;

  _proto.kick = function kick() {
    var _this2 = this;

    this.d3Context.timer(function () {
      return _Layout.prototype.tick.call(_this2);
    });
  } // a function for binding to events on the adapter
  ;

  _proto.on = function on(eventType, listener) {
    if (typeof eventType === 'string') {
      this.event.on(eventType, listener);
    } else {
      this.event.on(EventType[eventType], listener);
    }

    return this;
  };

  return D3StyleLayoutAdaptor;
}(Layout);

/**
 * @internal
 */

var D3v4StyleLayoutAdaptor = /*#__PURE__*/function (_Layout) {
  _inheritsLoose(D3v4StyleLayoutAdaptor, _Layout);

  function D3v4StyleLayoutAdaptor(d3Context) {
    var _this;

    _this = _Layout.call(this) || this;
    _this.d3Context = d3Context;
    _this.event = d3Context.dispatch(EventType[EventType.start], EventType[EventType.tick], EventType[EventType.end]); // bit of trickyness remapping 'this' so we can reference it in the function body.

    var d3layout = _assertThisInitialized(_this);

    _this.drag = function () {
      if (!drag) {
        var drag = d3Context.drag().subject(Layout.dragOrigin).on("start.d3adaptor", Layout.dragStart).on("drag.d3adaptor", function (d) {
          Layout.drag(d, d3Context.event);
          d3layout.resume(); // restart annealing
        }).on("end.d3adaptor", Layout.dragEnd);
      }

      if (!arguments.length) return drag; // this is the context of the function, i.e. the d3 selection
      //this//.on("mouseover.adaptor", colaMouseover)
      //.on("mouseout.adaptor", colaMouseout)

      arguments[0].call(drag);
    };

    return _this;
  }

  var _proto = D3v4StyleLayoutAdaptor.prototype;

  _proto.trigger = function trigger(e) {
    var d3event = {
      type: EventType[e.type],
      alpha: e.alpha,
      stress: e.stress
    }; // the dispatcher is actually expecting something of type EventTarget as the second argument
    // so passing the thing above is totally abusing the pattern... not sure what to do about this yet

    this.event.call(d3event.type, d3event); // via d3 dispatcher, e.g. event.start(e);
  } // iterate layout using a d3.timer, which queues calls to tick repeatedly until tick returns true
  ;

  _proto.kick = function kick() {
    var _this2 = this;

    var t = this.d3Context.timer(function () {
      return _Layout.prototype.tick.call(_this2) && t.stop();
    });
  } // a function for binding to events on the adapter
  ;

  _proto.on = function on(eventType, listener) {
    if (typeof eventType === 'string') {
      this.event.on(eventType, listener);
    } else {
      this.event.on(EventType[eventType], listener);
    }

    return this;
  };

  return D3v4StyleLayoutAdaptor;
}(Layout);

/**
 * provides an interface for use with d3:
 * Correct way to create way to construct the d3 cola object is to pass the d3 object into the adaptor function, like so:
 *
 *   `var d3cola = cola.d3adaptor(d3);`
 *
 * Internally, it will figure out if d3 is version 3 or 4 from the version tag and set up the right event forwarding. Defaults to version 3 if the d3 object is not passed.
 * - uses the d3 event system to dispatch layout events such as:
 *   o "start" (start layout process)
 *   o "tick" (after each layout iteration)
 *   o "end" (layout converged and complete).
 * - uses the d3 timer to queue layout iterations.
 * - sets up d3.behavior.drag to drag nodes
 *   o use `node.call(<the returned instance of Layout>.drag)` to make nodes draggable
 * returns an instance of the cola.Layout itself with which the user
 * can interact directly.
 */

function d3adaptor(d3Context) {
  if (!d3Context || isD3V3(d3Context)) {
    return new D3StyleLayoutAdaptor(d3Context);
  }

  return new D3v4StyleLayoutAdaptor(d3Context);
}

function isD3V3(d3Context) {
  var v3exp = /^3\./;
  return d3Context.version && d3Context.version.match(v3exp) !== null;
}

var NodeWrapper = function NodeWrapper(id, rect, children) {
  this.id = id;
  this.rect = rect;
  this.children = children;
  this.leaf = typeof children === 'undefined' || children.length === 0;
};
var Vert = function Vert(id, x, y, node, line) {
  if (node === void 0) {
    node = null;
  }

  if (line === void 0) {
    line = null;
  }

  this.id = id;
  this.x = x;
  this.y = y;
  this.node = node;
  this.line = line;
};
var LongestCommonSubsequence = /*#__PURE__*/function () {
  function LongestCommonSubsequence(s, t) {
    this.s = s;
    this.t = t;
    var mf = LongestCommonSubsequence.findMatch(s, t);
    var tr = t.slice(0).reverse();
    var mr = LongestCommonSubsequence.findMatch(s, tr);

    if (mf.length >= mr.length) {
      this.length = mf.length;
      this.si = mf.si;
      this.ti = mf.ti;
      this.reversed = false;
    } else {
      this.length = mr.length;
      this.si = mr.si;
      this.ti = t.length - mr.ti - mr.length;
      this.reversed = true;
    }
  }

  LongestCommonSubsequence.findMatch = function findMatch(s, t) {
    var m = s.length;
    var n = t.length;
    var match = {
      length: 0,
      si: -1,
      ti: -1
    };
    var l = new Array(m);

    for (var i = 0; i < m; i++) {
      l[i] = new Array(n);

      for (var j = 0; j < n; j++) {
        if (s[i] === t[j]) {
          var v = l[i][j] = i === 0 || j === 0 ? 1 : l[i - 1][j - 1] + 1;

          if (v > match.length) {
            match.length = v;
            match.si = i - v + 1;
            match.ti = j - v + 1;
          }
        } else l[i][j] = 0;
      }
    }

    return match;
  };

  var _proto = LongestCommonSubsequence.prototype;

  _proto.getSequence = function getSequence() {
    return this.length >= 0 ? this.s.slice(this.si, this.si + this.length) : [];
  };

  return LongestCommonSubsequence;
}();
var GridRouter = /*#__PURE__*/function () {
  function GridRouter(originalnodes, accessor, groupPadding) {
    var _this = this;

    if (groupPadding === void 0) {
      groupPadding = 12;
    }

    this.originalnodes = originalnodes;
    this.groupPadding = groupPadding;
    this.leaves = null;
    this.nodes = originalnodes.map(function (v, i) {
      return new NodeWrapper(i, accessor.getBounds(v), accessor.getChildren(v));
    });
    this.leaves = this.nodes.filter(function (v) {
      return v.leaf;
    });
    this.groups = this.nodes.filter(function (g) {
      return !g.leaf;
    });
    this.cols = this.getGridLines('x');
    this.rows = this.getGridLines('y'); // create parents for each node or group that is a member of another's children

    this.groups.forEach(function (v) {
      return v.children.forEach(function (c) {
        return _this.nodes[c].parent = v;
      });
    }); // root claims the remaining orphans

    this.root = {
      children: []
    };
    this.nodes.forEach(function (v) {
      if (typeof v.parent === 'undefined') {
        v.parent = _this.root;

        _this.root.children.push(v.id);
      } // each node will have grid vertices associated with it,
      // some inside the node and some on the boundary
      // leaf nodes will have exactly one internal node at the center
      // and four boundary nodes
      // groups will have potentially many of each


      v.ports = [];
    }); // nodes ordered by their position in the group hierarchy

    this.backToFront = this.nodes.slice(0);
    this.backToFront.sort(function (x, y) {
      return _this.getDepth(x) - _this.getDepth(y);
    }); // compute boundary rectangles for each group
    // has to be done from front to back, i.e. inside groups to outside groups
    // such that each can be made large enough to enclose its interior

    var frontToBackGroups = this.backToFront.slice(0).reverse().filter(function (g) {
      return !g.leaf;
    });
    frontToBackGroups.forEach(function (v) {
      var r = Rectangle.empty();
      v.children.forEach(function (c) {
        return r = r.union(_this.nodes[c].rect);
      });
      v.rect = r.inflate(_this.groupPadding);
    });
    var colMids = this.midPoints(this.cols.map(function (r) {
      return r.pos;
    }));
    var rowMids = this.midPoints(this.rows.map(function (r) {
      return r.pos;
    })); // setup extents of lines

    var rowx = colMids[0],
        rowX = colMids[colMids.length - 1];
    var coly = rowMids[0],
        colY = rowMids[rowMids.length - 1]; // horizontal lines

    var hlines = this.rows.map(function (r) {
      return {
        x1: rowx,
        x2: rowX,
        y1: r.pos,
        y2: r.pos
      };
    }).concat(rowMids.map(function (m) {
      return {
        x1: rowx,
        x2: rowX,
        y1: m,
        y2: m
      };
    })); // vertical lines

    var vlines = this.cols.map(function (c) {
      return {
        x1: c.pos,
        x2: c.pos,
        y1: coly,
        y2: colY
      };
    }).concat(colMids.map(function (m) {
      return {
        x1: m,
        x2: m,
        y1: coly,
        y2: colY
      };
    })); // the full set of lines

    var lines = hlines.concat(vlines); // we record the vertices associated with each line

    lines.forEach(function (l) {
      return l.verts = [];
    }); // the routing graph

    this.verts = [];
    this.edges = []; // create vertices at the crossings of horizontal and vertical grid-lines

    hlines.forEach(function (h) {
      return vlines.forEach(function (v) {
        var p = new Vert(_this.verts.length, v.x1, h.y1);
        h.verts.push(p);
        v.verts.push(p);

        _this.verts.push(p); // assign vertices to the nodes immediately under them


        var i = _this.backToFront.length;

        while (i-- > 0) {
          var node = _this.backToFront[i],
              r = node.rect;
          var dx = Math.abs(p.x - r.cx()),
              dy = Math.abs(p.y - r.cy());

          if (dx < r.width() / 2 && dy < r.height() / 2) {
            p.node = node;
            break;
          }
        }
      });
    });
    lines.forEach(function (l, li) {
      // create vertices at the intersections of nodes and lines
      _this.nodes.forEach(function (v, i) {
        v.rect.lineIntersections(l.x1, l.y1, l.x2, l.y2).forEach(function (intersect, j) {
          //console.log(li+','+i+','+j+':'+intersect.x + ',' + intersect.y);
          var p = new Vert(_this.verts.length, intersect.x, intersect.y, v, l);

          _this.verts.push(p);

          l.verts.push(p);
          v.ports.push(p);
        });
      }); // split lines into edges joining vertices


      var isHoriz = Math.abs(l.y1 - l.y2) < 0.1;

      var delta = function delta(a, b) {
        return isHoriz ? b.x - a.x : b.y - a.y;
      };

      l.verts.sort(delta);

      for (var i = 1; i < l.verts.length; i++) {
        var u = l.verts[i - 1],
            v = l.verts[i];
        if (u.node && u.node === v.node && u.node.leaf) continue;

        _this.edges.push({
          source: u.id,
          target: v.id,
          length: Math.abs(delta(u, v))
        });
      }
    });
  }

  var _proto2 = GridRouter.prototype;

  _proto2.avg = function avg(a) {
    return a.reduce(function (x, y) {
      return x + y;
    }) / a.length;
  } // in the given axis, find sets of leaves overlapping in that axis
  // center of each GridLine is average of all nodes in column
  ;

  _proto2.getGridLines = function getGridLines(axis) {
    var columns = [];
    var ls = this.leaves.slice(0, this.leaves.length);

    while (ls.length > 0) {
      // find a column of all leaves overlapping in axis with the first leaf
      var overlapping = ls.filter(function (v) {
        return v.rect['overlap' + axis.toUpperCase()](ls[0].rect);
      });
      var col = {
        nodes: overlapping,
        pos: this.avg(overlapping.map(function (v) {
          return v.rect['c' + axis]();
        }))
      };
      columns.push(col);
      col.nodes.forEach(function (v) {
        return ls.splice(ls.indexOf(v), 1);
      });
    }

    columns.sort(function (a, b) {
      return a.pos - b.pos;
    });
    return columns;
  } // get the depth of the given node in the group hierarchy
  ;

  _proto2.getDepth = function getDepth(v) {
    var depth = 0;

    while (v.parent !== this.root) {
      depth++;
      v = v.parent;
    }

    return depth;
  } // medial axes between node centres and also boundary lines for the grid
  ;

  _proto2.midPoints = function midPoints(a) {
    if (a.length === 1) {
      return [a[0]];
    }

    var gap = a[1] - a[0];
    var mids = [a[0] - gap / 2];

    for (var i = 1; i < a.length; i++) {
      mids.push((a[i] + a[i - 1]) / 2);
    }

    mids.push(a[a.length - 1] + gap / 2);
    return mids;
  } // find path from v to root including both v and root
  ;

  _proto2.findLineage = function findLineage(v) {
    var lineage = [v];

    do {
      v = v.parent;
      lineage.push(v);
    } while (v !== this.root);

    return lineage.reverse();
  } // find path connecting a and b through their lowest common ancestor
  ;

  _proto2.findAncestorPathBetween = function findAncestorPathBetween(a, b) {
    var aa = this.findLineage(a),
        ba = this.findLineage(b),
        i = 0;

    while (aa[i] === ba[i]) {
      i++;
    } // i-1 to include common ancestor only once (as first element)


    return {
      commonAncestor: aa[i - 1],
      lineages: aa.slice(i).concat(ba.slice(i))
    };
  } // when finding a path between two nodes a and b, siblings of a and b on the
  // paths from a and b to their least common ancestor are obstacles
  ;

  _proto2.siblingObstacles = function siblingObstacles(a, b) {
    var _this2 = this;

    var path = this.findAncestorPathBetween(a, b);
    var lineageLookup = {};
    path.lineages.forEach(function (v) {
      return lineageLookup[v.id] = {};
    });
    var obstacles = path.commonAncestor.children.filter(function (v) {
      return !(v in lineageLookup);
    });
    path.lineages.filter(function (v) {
      return v.parent !== path.commonAncestor;
    }).forEach(function (v) {
      return obstacles = obstacles.concat(v.parent.children.filter(function (c) {
        return c !== v.id;
      }));
    });
    return obstacles.map(function (v) {
      return _this2.nodes[v];
    });
  } // for the given routes, extract all the segments orthogonal to the axis x
  // and return all them grouped by x position
  ;

  GridRouter.getSegmentSets = function getSegmentSets(routes, x, y) {
    // vsegments is a list of vertical segments sorted by x position
    var vsegments = [];

    for (var ei = 0; ei < routes.length; ei++) {
      var route = routes[ei];

      for (var si = 0; si < route.length; si++) {
        var s = route[si];
        s.edgeid = ei;
        s.i = si;
        var sdx = s[1][x] - s[0][x];

        if (Math.abs(sdx) < 0.1) {
          vsegments.push(s);
        }
      }
    }

    vsegments.sort(function (a, b) {
      return a[0][x] - b[0][x];
    }); // vsegmentsets is a set of sets of segments grouped by x position

    var vsegmentsets = [];
    var segmentset = null;

    for (var i = 0; i < vsegments.length; i++) {
      var s = vsegments[i];

      if (!segmentset || Math.abs(s[0][x] - segmentset.pos) > 0.1) {
        segmentset = {
          pos: s[0][x],
          segments: []
        };
        vsegmentsets.push(segmentset);
      }

      segmentset.segments.push(s);
    }

    return vsegmentsets;
  } // for all segments in this bundle create a vpsc problem such that
  // each segment's x position is a variable and separation constraints
  // are given by the partial order over the edges to which the segments belong
  // for each pair s1,s2 of segments in the open set:
  //   e1 = edge of s1, e2 = edge of s2
  //   if leftOf(e1,e2) create constraint s1.x + gap <= s2.x
  //   else if leftOf(e2,e1) create cons. s2.x + gap <= s1.x
  ;

  GridRouter.nudgeSegs = function nudgeSegs(x, y, routes, segments, leftOf, gap) {
    var n = segments.length;
    if (n <= 1) return;
    var vs = segments.map(function (s) {
      return new Variable(s[0][x]);
    });
    var cs = [];

    for (var i = 0; i < n; i++) {
      for (var j = 0; j < n; j++) {
        if (i === j) continue;
        var s1 = segments[i],
            s2 = segments[j],
            e1 = s1.edgeid,
            e2 = s2.edgeid,
            lind = -1,
            rind = -1; // in page coordinates (not cartesian) the notion of 'leftof' is flipped in the horizontal axis from the vertical axis
        // that is, when nudging vertical segments, if they increase in the y(conj) direction the segment belonging to the
        // 'left' edge actually needs to be nudged to the right
        // when nudging horizontal segments, if the segments increase in the x direction
        // then the 'left' segment needs to go higher, i.e. to have y pos less than that of the right

        if (x == 'x') {
          if (leftOf(e1, e2)) {
            //console.log('s1: ' + s1[0][x] + ',' + s1[0][y] + '-' + s1[1][x] + ',' + s1[1][y]);
            if (s1[0][y] < s1[1][y]) {
              lind = j, rind = i;
            } else {
              lind = i, rind = j;
            }
          }
        } else {
          if (leftOf(e1, e2)) {
            if (s1[0][y] < s1[1][y]) {
              lind = i, rind = j;
            } else {
              lind = j, rind = i;
            }
          }
        }

        if (lind >= 0) {
          //console.log(x+' constraint: ' + lind + '<' + rind);
          cs.push(new Constraint(vs[lind], vs[rind], gap));
        }
      }
    }

    var solver = new Solver(vs, cs);
    solver.solve();
    vs.forEach(function (v, i) {
      var s = segments[i];
      var pos = v.position();
      s[0][x] = s[1][x] = pos;
      var route = routes[s.edgeid];
      if (s.i > 0) route[s.i - 1][1][x] = pos;
      if (s.i < route.length - 1) route[s.i + 1][0][x] = pos;
    });
  };

  GridRouter.nudgeSegments = function nudgeSegments(routes, x, y, leftOf, gap) {
    var vsegmentsets = GridRouter.getSegmentSets(routes, x, y); // scan the grouped (by x) segment sets to find co-linear bundles

    for (var i = 0; i < vsegmentsets.length; i++) {
      var ss = vsegmentsets[i];
      var events = [];

      for (var j = 0; j < ss.segments.length; j++) {
        var s = ss.segments[j];
        events.push({
          type: 0,
          s: s,
          pos: Math.min(s[0][y], s[1][y])
        });
        events.push({
          type: 1,
          s: s,
          pos: Math.max(s[0][y], s[1][y])
        });
      }

      events.sort(function (a, b) {
        return a.pos - b.pos + a.type - b.type;
      });
      var open = [];
      var openCount = 0;
      events.forEach(function (e) {
        if (e.type === 0) {
          open.push(e.s);
          openCount++;
        } else {
          openCount--;
        }

        if (openCount == 0) {
          GridRouter.nudgeSegs(x, y, routes, open, leftOf, gap);
          open = [];
        }
      });
    }
  } // obtain routes for the specified edges, nicely nudged apart
  // warning: edge paths may be reversed such that common paths are ordered consistently within bundles!
  // @param edges list of edges
  // @param nudgeGap how much to space parallel edge segements
  // @param source function to retrieve the index of the source node for a given edge
  // @param target function to retrieve the index of the target node for a given edge
  // @returns an array giving, for each edge, an array of segments, each segment a pair of points in an array
  ;

  _proto2.routeEdges = function routeEdges(edges, nudgeGap, source, target) {
    var _this3 = this;

    var routePaths = edges.map(function (e) {
      return _this3.route(source(e), target(e));
    });
    var order = GridRouter.orderEdges(routePaths);
    var routes = routePaths.map(function (e) {
      return GridRouter.makeSegments(e);
    });
    GridRouter.nudgeSegments(routes, 'x', 'y', order, nudgeGap);
    GridRouter.nudgeSegments(routes, 'y', 'x', order, nudgeGap);
    GridRouter.unreverseEdges(routes, routePaths);
    return routes;
  } // path may have been reversed by the subsequence processing in orderEdges
  // so now we need to restore the original order
  ;

  GridRouter.unreverseEdges = function unreverseEdges(routes, routePaths) {
    routes.forEach(function (segments, i) {
      var path = routePaths[i];

      if (path.reversed) {
        segments.reverse(); // reverse order of segments

        segments.forEach(function (segment) {
          segment.reverse(); // reverse each segment
        });
      }
    });
  };

  GridRouter.angleBetween2Lines = function angleBetween2Lines(line1, line2) {
    var angle1 = Math.atan2(line1[0].y - line1[1].y, line1[0].x - line1[1].x);
    var angle2 = Math.atan2(line2[0].y - line2[1].y, line2[0].x - line2[1].x);
    var diff = angle1 - angle2;

    if (diff > Math.PI || diff < -Math.PI) {
      diff = angle2 - angle1;
    }

    return diff;
  } // does the path a-b-c describe a left turn?
  ;

  GridRouter.isLeft = function isLeft(a, b, c) {
    return (b.x - a.x) * (c.y - a.y) - (b.y - a.y) * (c.x - a.x) <= 0;
  } // for the given list of ordered pairs, returns a function that (efficiently) looks-up a specific pair to
  // see if it exists in the list
  ;

  GridRouter.getOrder = function getOrder(pairs) {
    var outgoing = {};

    for (var i = 0; i < pairs.length; i++) {
      var p = pairs[i];
      if (typeof outgoing[p.l] === 'undefined') outgoing[p.l] = {};
      outgoing[p.l][p.r] = true;
    }

    return function (l, r) {
      return typeof outgoing[l] !== 'undefined' && outgoing[l][r];
    };
  } // returns an ordering (a lookup function) that determines the correct order to nudge the
  // edge paths apart to minimize crossings
  ;

  GridRouter.orderEdges = function orderEdges(edges) {
    var edgeOrder = [];

    for (var i = 0; i < edges.length - 1; i++) {
      for (var j = i + 1; j < edges.length; j++) {
        var e = edges[i],
            f = edges[j],
            lcs = new LongestCommonSubsequence(e, f);
        var u, vi, vj;
        if (lcs.length === 0) continue; // no common subpath

        if (lcs.reversed) {
          // if we found a common subpath but one of the edges runs the wrong way,
          // then reverse f.
          f.reverse();
          f.reversed = true;
          lcs = new LongestCommonSubsequence(e, f);
        }

        if ((lcs.si <= 0 || lcs.ti <= 0) && (lcs.si + lcs.length >= e.length || lcs.ti + lcs.length >= f.length)) {
          // the paths do not diverge, so make an arbitrary ordering decision
          edgeOrder.push({
            l: i,
            r: j
          });
          continue;
        }

        if (lcs.si + lcs.length >= e.length || lcs.ti + lcs.length >= f.length) {
          // if the common subsequence of the
          // two edges being considered goes all the way to the
          // end of one (or both) of the lines then we have to
          // base our ordering decision on the other end of the
          // common subsequence
          u = e[lcs.si + 1];
          vj = e[lcs.si - 1];
          vi = f[lcs.ti - 1];
        } else {
          u = e[lcs.si + lcs.length - 2];
          vi = e[lcs.si + lcs.length];
          vj = f[lcs.ti + lcs.length];
        }

        if (GridRouter.isLeft(u, vi, vj)) {
          edgeOrder.push({
            l: j,
            r: i
          });
        } else {
          edgeOrder.push({
            l: i,
            r: j
          });
        }
      }
    } //edgeOrder.forEach(function (e) { console.log('l:' + e.l + ',r:' + e.r) });


    return GridRouter.getOrder(edgeOrder);
  } // for an orthogonal path described by a sequence of points, create a list of segments
  // if consecutive segments would make a straight line they are merged into a single segment
  // segments are over cloned points, not the original vertices
  ;

  GridRouter.makeSegments = function makeSegments(path) {
    function copyPoint(p) {
      return {
        x: p.x,
        y: p.y
      };
    }

    var isStraight = function isStraight(a, b, c) {
      return Math.abs((b.x - a.x) * (c.y - a.y) - (b.y - a.y) * (c.x - a.x)) < 0.001;
    };

    var segments = [];
    var a = copyPoint(path[0]);

    for (var i = 1; i < path.length; i++) {
      var b = copyPoint(path[i]),
          c = i < path.length - 1 ? path[i + 1] : null;

      if (!c || !isStraight(a, b, c)) {
        segments.push([a, b]);
        a = b;
      }
    }

    return segments;
  } // find a route between node s and node t
  // returns an array of indices to verts
  ;

  _proto2.route = function route(s, t) {
    var _this4 = this;

    var source = this.nodes[s],
        target = this.nodes[t];
    this.obstacles = this.siblingObstacles(source, target);
    var obstacleLookup = {};
    this.obstacles.forEach(function (o) {
      return obstacleLookup[o.id] = o;
    });
    this.passableEdges = this.edges.filter(function (e) {
      var u = _this4.verts[e.source],
          v = _this4.verts[e.target];
      return !(u.node && u.node.id in obstacleLookup || v.node && v.node.id in obstacleLookup);
    }); // add dummy segments linking ports inside source and target

    for (var i = 1; i < source.ports.length; i++) {
      var u = source.ports[0].id;
      var v = source.ports[i].id;
      this.passableEdges.push({
        source: u,
        target: v,
        length: 0
      });
    }

    for (var i = 1; i < target.ports.length; i++) {
      var u = target.ports[0].id;
      var v = target.ports[i].id;
      this.passableEdges.push({
        source: u,
        target: v,
        length: 0
      });
    }

    var getSource = function getSource(e) {
      return e.source;
    },
        getTarget = function getTarget(e) {
      return e.target;
    },
        getLength = function getLength(e) {
      return e.length;
    };

    var shortestPathCalculator = new Calculator(this.verts.length, this.passableEdges, getSource, getTarget, getLength);

    var bendPenalty = function bendPenalty(u, v, w) {
      var a = _this4.verts[u],
          b = _this4.verts[v],
          c = _this4.verts[w];
      var dx = Math.abs(c.x - a.x),
          dy = Math.abs(c.y - a.y); // don't count bends from internal node edges

      if (a.node === source && a.node === b.node || b.node === target && b.node === c.node) return 0;
      return dx > 1 && dy > 1 ? 1000 : 0;
    }; // get shortest path


    var shortestPath = shortestPathCalculator.PathFromNodeToNodeWithPrevCost(source.ports[0].id, target.ports[0].id, bendPenalty); // shortest path is reversed and does not include the target port

    var pathPoints = shortestPath.reverse().map(function (vi) {
      return _this4.verts[vi];
    });
    pathPoints.push(this.nodes[target.id].ports[0]); // filter out any extra end points that are inside the source or target (i.e. the dummy segments above)

    return pathPoints.filter(function (v, i) {
      return !(i < pathPoints.length - 1 && pathPoints[i + 1].node === source && v.node === source || i > 0 && v.node === target && pathPoints[i - 1].node === target);
    });
  };

  GridRouter.getRoutePath = function getRoutePath(route, cornerradius, arrowwidth, arrowheight) {
    var result = {
      routepath: 'M ' + route[0][0].x + ' ' + route[0][0].y + ' ',
      arrowpath: ''
    };

    if (route.length > 1) {
      for (var i = 0; i < route.length; i++) {
        var li = route[i];
        var x = li[1].x,
            y = li[1].y;
        var dx = x - li[0].x;
        var dy = y - li[0].y;

        if (i < route.length - 1) {
          if (Math.abs(dx) > 0) {
            x -= dx / Math.abs(dx) * cornerradius;
          } else {
            y -= dy / Math.abs(dy) * cornerradius;
          }

          result.routepath += 'L ' + x + ' ' + y + ' ';
          var l = route[i + 1];
          var x0 = l[0].x,
              y0 = l[0].y;
          var x1 = l[1].x;
          var y1 = l[1].y;
          dx = x1 - x0;
          dy = y1 - y0;
          var angle = GridRouter.angleBetween2Lines(li, l) < 0 ? 1 : 0; //console.log(cola.GridRouter.angleBetween2Lines(li, l))

          var x2, y2;

          if (Math.abs(dx) > 0) {
            x2 = x0 + dx / Math.abs(dx) * cornerradius;
            y2 = y0;
          } else {
            x2 = x0;
            y2 = y0 + dy / Math.abs(dy) * cornerradius;
          }

          var cx = Math.abs(x2 - x);
          var cy = Math.abs(y2 - y);
          result.routepath += 'A ' + cx + ' ' + cy + ' 0 0 ' + angle + ' ' + x2 + ' ' + y2 + ' ';
        } else {
          var arrowtip = [x, y];
          var arrowcorner1, arrowcorner2;

          if (Math.abs(dx) > 0) {
            x -= dx / Math.abs(dx) * arrowheight;
            arrowcorner1 = [x, y + arrowwidth];
            arrowcorner2 = [x, y - arrowwidth];
          } else {
            y -= dy / Math.abs(dy) * arrowheight;
            arrowcorner1 = [x + arrowwidth, y];
            arrowcorner2 = [x - arrowwidth, y];
          }

          result.routepath += 'L ' + x + ' ' + y + ' ';

          if (arrowheight > 0) {
            result.arrowpath = 'M ' + arrowtip[0] + ' ' + arrowtip[1] + ' L ' + arrowcorner1[0] + ' ' + arrowcorner1[1] + ' L ' + arrowcorner2[0] + ' ' + arrowcorner2[1];
          }
        }
      }
    } else {
      var li = route[0];
      var x = li[1].x,
          y = li[1].y;
      var dx = x - li[0].x;
      var dy = y - li[0].y;
      var arrowtip = [x, y];
      var arrowcorner1, arrowcorner2;

      if (Math.abs(dx) > 0) {
        x -= dx / Math.abs(dx) * arrowheight;
        arrowcorner1 = [x, y + arrowwidth];
        arrowcorner2 = [x, y - arrowwidth];
      } else {
        y -= dy / Math.abs(dy) * arrowheight;
        arrowcorner1 = [x + arrowwidth, y];
        arrowcorner2 = [x - arrowwidth, y];
      }

      result.routepath += 'L ' + x + ' ' + y + ' ';

      if (arrowheight > 0) {
        result.arrowpath = 'M ' + arrowtip[0] + ' ' + arrowtip[1] + ' L ' + arrowcorner1[0] + ' ' + arrowcorner1[1] + ' L ' + arrowcorner2[0] + ' ' + arrowcorner2[1];
      }
    }

    return result;
  };

  return GridRouter;
}();

var wasmInstPromise$1 = /*#__PURE__*/getDerivativeComputerWasm();
var Link3D = /*#__PURE__*/function () {
  function Link3D(source, target) {
    this.source = source;
    this.target = target;
  }

  var _proto = Link3D.prototype;

  _proto.actualLength = function actualLength(x) {
    var _this = this;

    return Math.sqrt(x.reduce(function (c, v) {
      var dx = v[_this.target] - v[_this.source];
      return c + dx * dx;
    }, 0));
  };

  return Link3D;
}();
var Node3D = function Node3D(x, y, z) {
  if (x === void 0) {
    x = 0;
  }

  if (y === void 0) {
    y = 0;
  }

  if (z === void 0) {
    z = 0;
  }

  this.x = x;
  this.y = y;
  this.z = z;
};
var Layout3D = /*#__PURE__*/function () {
  function Layout3D(nodes, links, idealLinkLength) {
    var _this2 = this;

    if (idealLinkLength === void 0) {
      idealLinkLength = 1;
    }

    this.nodes = nodes;
    this.links = links;
    this.idealLinkLength = idealLinkLength;
    this.constraints = null;
    this.useJaccardLinkLengths = true;
    this.result = new Array(Layout3D.k);

    for (var i = 0; i < Layout3D.k; ++i) {
      this.result[i] = new Array(nodes.length);
    }

    nodes.forEach(function (v, i) {
      for (var _iterator = _createForOfIteratorHelperLoose(Layout3D.dims), _step; !(_step = _iterator()).done;) {
        var dim = _step.value;
        if (typeof v[dim] == 'undefined') v[dim] = Math.random();
      }

      _this2.result[0][i] = v.x;
      _this2.result[1][i] = v.y;
      _this2.result[2][i] = v.z;
    });
  }

  var _proto2 = Layout3D.prototype;

  _proto2.linkLength = function linkLength(l) {
    return l.actualLength(this.result);
  };

  _proto2.start = function start(iterations) {
    if (iterations === void 0) {
      iterations = 100;
    }

    try {
      var _this4 = this;

      var n = _this4.nodes.length;
      var linkAccessor = new LinkAccessor();
      if (_this4.useJaccardLinkLengths) jaccardLinkLengths(_this4.links, linkAccessor, 1.5);

      _this4.links.forEach(function (e) {
        return e.length *= _this4.idealLinkLength;
      }); // Create the distance matrix that Cola needs


      var distanceMatrix = new Calculator(n, _this4.links, function (e) {
        return e.source;
      }, function (e) {
        return e.target;
      }, function (e) {
        return e.length;
      }).DistanceMatrix();
      var D = Descent.createSquareMatrix(n, function (i, j) {
        return distanceMatrix[i][j];
      }); // G is a square matrix with G[i][j] = 1 iff there exists an edge between node i and node j
      // otherwise 2.

      var G = Descent.createSquareMatrix(n, function () {
        return 2;
      });

      _this4.links.forEach(function (_ref) {
        var source = _ref.source,
            target = _ref.target;
        return G[source][target] = G[target][source] = 1;
      });

      return Promise.resolve(wasmInstPromise$1).then(function (wasmInst) {
        _this4.descent = new Descent(_this4.result, D, undefined, wasmInst);
        _this4.descent.threshold = 1e-3;
        _this4.descent.G = G.map(function (Gn) {
          return new Float32Array(Gn);
        }); //let constraints = this.links.map(e=> <any>{
        //    axis: 'y', left: e.source, right: e.target, gap: e.length*1.5
        //});

        if (_this4.constraints) _this4.descent.project = new Projection(_this4.nodes, null, null, _this4.constraints).projectFunctions();

        for (var i = 0; i < _this4.nodes.length; i++) {
          var v = _this4.nodes[i];

          if (v.fixed) {
            _this4.descent.locks.add(i, [v.x, v.y, v.z]);
          }
        }

        _this4.descent.run(iterations);

        return _this4;
      });
    } catch (e) {
      return Promise.reject(e);
    }
  };

  _proto2.tick = function tick() {
    this.descent.locks.clear();

    for (var i = 0; i < this.nodes.length; i++) {
      var v = this.nodes[i];

      if (v.fixed) {
        this.descent.locks.add(i, [v.x, v.y, v.z]);
      }
    }

    return this.descent.rungeKutta();
  };

  return Layout3D;
}();
Layout3D.dims = ['x', 'y', 'z'];
Layout3D.k = Layout3D.dims.length;

var LinkAccessor = /*#__PURE__*/function () {
  function LinkAccessor() {}

  var _proto3 = LinkAccessor.prototype;

  _proto3.getSourceIndex = function getSourceIndex(e) {
    return e.source;
  };

  _proto3.getTargetIndex = function getTargetIndex(e) {
    return e.target;
  };

  _proto3.getLength = function getLength(e) {
    return e.length;
  };

  _proto3.setLength = function setLength(e, l) {
    e.length = l;
  };

  return LinkAccessor;
}();

/**
 * @property nudgeGap spacing between parallel edge segments
 * @property margin space around nodes
 * @property groupMargin space around groups
 */

function gridify(pgLayout, nudgeGap, margin, groupMargin) {
  pgLayout.cola.start(0, 0, 0, 10, false);
  var gridrouter = route(pgLayout.cola.nodes(), pgLayout.cola.groups(), margin, groupMargin);
  return gridrouter.routeEdges(pgLayout.powerGraph.powerEdges, nudgeGap, function (e) {
    return e.source.routerNode.id;
  }, function (e) {
    return e.target.routerNode.id;
  });
}

function route(nodes, groups, margin, groupMargin) {
  nodes.forEach(function (d) {
    d.routerNode = {
      name: d.name,
      bounds: d.bounds.inflate(-margin)
    };
  });
  groups.forEach(function (d) {
    d.routerNode = {
      bounds: d.bounds.inflate(-groupMargin),
      children: (typeof d.groups !== 'undefined' ? d.groups.map(function (c) {
        return nodes.length + c.id;
      }) : []).concat(typeof d.leaves !== 'undefined' ? d.leaves.map(function (c) {
        return c.index;
      }) : [])
    };
  });
  var gridRouterNodes = nodes.concat(groups).map(function (d, i) {
    d.routerNode.id = i;
    return d.routerNode;
  });
  return new GridRouter(gridRouterNodes, {
    getChildren: function getChildren(v) {
      return v.children;
    },
    getBounds: function getBounds(v) {
      return v.bounds;
    }
  }, margin - groupMargin);
}

function powerGraphGridLayout(graph, size, grouppadding) {
  // compute power graph
  var powerGraph;
  graph.nodes.forEach(function (v, i) {
    return v.index = i;
  });
  new Layout().avoidOverlaps(false).nodes(graph.nodes).links(graph.links).powerGraphGroups(function (d) {
    powerGraph = d;
    powerGraph.groups.forEach(function (v) {
      return v.padding = grouppadding;
    });
  }); // construct a flat graph with dummy nodes for the groups and edges connecting group dummy nodes to their children
  // power edges attached to groups are replaced with edges connected to the corresponding group dummy node

  var n = graph.nodes.length;
  var edges = [];
  var vs = graph.nodes.slice(0);
  vs.forEach(function (v, i) {
    return v.index = i;
  });
  powerGraph.groups.forEach(function (g) {
    var sourceInd = g.index = g.id + n;
    vs.push(g);
    if (typeof g.leaves !== 'undefined') g.leaves.forEach(function (v) {
      return edges.push({
        source: sourceInd,
        target: v.index
      });
    });
    if (typeof g.groups !== 'undefined') g.groups.forEach(function (gg) {
      return edges.push({
        source: sourceInd,
        target: gg.id + n
      });
    });
  });
  powerGraph.powerEdges.forEach(function (e) {
    edges.push({
      source: e.source.index,
      target: e.target.index
    });
  }); // layout the flat graph with dummy nodes and edges

  new Layout().size(size).nodes(vs).links(edges).avoidOverlaps(false).linkDistance(30).symmetricDiffLinkLengths(5).convergenceThreshold(1e-4).start(100, 0, 0, 0, false); // final layout taking node positions from above as starting positions
  // subject to group containment constraints
  // and then gridifying the layout

  return {
    cola: new Layout().convergenceThreshold(1e-3).size(size).avoidOverlaps(true).nodes(graph.nodes).links(graph.links) //.flowLayout('y', 30)
    .groupCompactness(1e-4).linkDistance(30).symmetricDiffLinkLengths(5).powerGraphGroups(function (d) {
      powerGraph = d;
      powerGraph.groups.forEach(function (v) {
        v.padding = grouppadding;
      });
    }).start(50, 0, 100, 0, false),
    powerGraph: powerGraph
  };
}

export { BiTangent, BiTangents, Block, Blocks, Calculator, Configuration, Constraint, ConvexHull, Descent, EventType, GridRouter, IndexedVariable, Iterator, LLtangent_PolyPolyC, LRtangent_PolyPolyC, Layout, Layout3D, LayoutAdaptor, LineSegment, Link3D, LinkSets, Locks, LongestCommonSubsequence, Module, ModuleSet, Node3D, NodeWrapper, PairingHeap, Point, PolyPoint, PositionStats, PowerEdge, PriorityQueue, Projection, PseudoRandom, RBTree, RLtangent_PolyPolyC, RRtangent_PolyPolyC, Rectangle, Solver, TVGPoint, TangentVisibilityGraph, TreeBase, Variable, Vert, VisibilityEdge, VisibilityVertex, adaptor, applyPacking, clockwiseRadialSweep, computeGroupBounds, d3adaptor, generateDirectedEdgeConstraints, generateXConstraints, generateXGroupConstraints, generateYConstraints, generateYGroupConstraints, getGroups, gridify, isLeft, jaccardLinkLengths, makeEdgeBetween, makeEdgeTo, polysOverlap, powerGraphGridLayout, removeOverlapInOneDimension, removeOverlaps, separateGraphs, stronglyConnectedComponents, symmetricDiffLinkLengths, tangent_PolyPolyC, tangents };
//# sourceMappingURL=cola.esm.js.map
