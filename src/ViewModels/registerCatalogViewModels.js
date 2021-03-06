'use strict';

/*global require*/

var ArcGisMapServerItemViewModel = require('./ArcGisMapServerItemViewModel');
var CkanGroupViewModel = require('./CkanGroupViewModel');
var createCatalogMemberFromType = require('./createCatalogMemberFromType');
var createCatalogItemFromUrl = require('./createCatalogItemFromUrl');
var CzmlItemViewModel = require('./CzmlItemViewModel');
var CatalogGroupViewModel = require('./CatalogGroupViewModel');
var GeoJsonItemViewModel = require('./GeoJsonItemViewModel');
var KmlItemViewModel = require('./KmlItemViewModel');
var WebFeatureServiceGroupViewModel = require('./WebFeatureServiceGroupViewModel');
var WebFeatureServiceItemViewModel = require('./WebFeatureServiceItemViewModel');
var WebMapServiceGroupViewModel = require('./WebMapServiceGroupViewModel');
var WebMapServiceItemViewModel = require('./WebMapServiceItemViewModel');
var CsvItemViewModel = require('./CsvItemViewModel');
var GpxItemViewModel = require('./GpxItemViewModel');

var registerCatalogViewModels = function() {
    createCatalogMemberFromType.register('ckan', CkanGroupViewModel);
    createCatalogMemberFromType.register('csv', CsvItemViewModel);
    createCatalogMemberFromType.register('czml', CzmlItemViewModel);
    createCatalogMemberFromType.register('esri-mapServer', ArcGisMapServerItemViewModel);
    createCatalogMemberFromType.register('geojson', GeoJsonItemViewModel);
    createCatalogMemberFromType.register('group', CatalogGroupViewModel);
    createCatalogMemberFromType.register('kml', KmlItemViewModel);
    createCatalogMemberFromType.register('wms', WebMapServiceItemViewModel);
    createCatalogMemberFromType.register('wms-getCapabilities', WebMapServiceGroupViewModel);
    createCatalogMemberFromType.register('wfs', WebFeatureServiceItemViewModel);
    createCatalogMemberFromType.register('wfs-getCapabilities', WebFeatureServiceGroupViewModel);
    createCatalogMemberFromType.register('gpx', GpxItemViewModel);

    createCatalogItemFromUrl.register(matchesExtension('czm'), CzmlItemViewModel);
    createCatalogItemFromUrl.register(matchesExtension('czml'), CzmlItemViewModel);
    createCatalogItemFromUrl.register(matchesExtension('geojson'), GeoJsonItemViewModel);
    createCatalogItemFromUrl.register(matchesExtension('json'), GeoJsonItemViewModel);
    createCatalogItemFromUrl.register(matchesExtension('topojson'), GeoJsonItemViewModel);
    createCatalogItemFromUrl.register(matchesExtension('kml'), KmlItemViewModel);
    createCatalogItemFromUrl.register(matchesExtension('kmz'), KmlItemViewModel);
    createCatalogItemFromUrl.register(matchesExtension('csv'), CsvItemViewModel);
    createCatalogItemFromUrl.register(matchesExtension('gpx'), GpxItemViewModel);
};

function matchesExtension(extension) {
    var regex = new RegExp('\\.' + extension + '$', 'i');
    return function(url) {
        return url.match(regex);
    };
}

module.exports = registerCatalogViewModels;
