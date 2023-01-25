const ecovis = require('..').default // require('ecosystem-visualization')

document.title = 'Dat Garden Visualization'

const DAT_GARDEN_BASE_URL = "https://dat-ecosystem.org/dat-garden-rake/"

ecovis(DAT_GARDEN_BASE_URL).then(el => document.body.append(el))