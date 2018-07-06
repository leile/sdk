// @flow
import { getTripPatterns, getStopPlaceDepartures, getStopPlaces, getStopPlacesByPosition } from './trip'
import { getBikeRentalStation } from './bikeRental'
import getLocationService from './geocoder'
import { getJourneyPlannerHost, getGeocoderHost } from './config'
import type { Hosts } from './config'

type ServiceConfig = {
    hosts: Hosts,
    apikeys: Hosts,
};

const DEFAULT_CONFIG = {
    hosts: {},
    apikeys: {},
}

class EnturService {
    config: ServiceConfig;

    constructor(config: Object) {
        this.config = {
            ...DEFAULT_CONFIG,
            ...config,
        }
    }

    getLocations(query: string): Promise<Array<Object>> {
        const host = getGeocoderHost(this.config)
        return getLocationService(host, query)
    }

    getTripPatterns(query: Object): Promise<Array<Object>> {
        const host = getJourneyPlannerHost(this.config)
        return getTripPatterns(host, query)
    }

    getStopPlaceDepartures(stopPlaceId: string, query?: Object): Promise<Array<Object>> {
        const host = getJourneyPlannerHost(this.config)
        return getStopPlaceDepartures(host, stopPlaceId, query)
    }

    getStopPlaces(stopPlaceIds: Array<string>): Promise<Array<Object>> {
        const host = getJourneyPlannerHost(this.config)
        return getStopPlaces(host, stopPlaceIds)
    }

    getStopPlacesByPosition(position: Object): Promise<Array<Object>> {
        const host = getJourneyPlannerHost(this.config)
        return getStopPlacesByPosition(host, position)
    }

    getBikeRentalStation(stationId: string): Promise<Array<Object>> {
        const host = getJourneyPlannerHost(this.config)
        return getBikeRentalStation(host, stationId)
    }
}


export default EnturService
