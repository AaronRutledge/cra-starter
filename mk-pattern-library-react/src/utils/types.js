// @flow
export type Person = {
    personId: number,
    externalSourcePersonId: ?string,
    name: ?string,
    email: ?string,
    telephone: ?string,
    title: ?string,
    company: string,
    personTypeId: number
}

export type Location = {
    place: ?string,
    addressLine1: ?string,
    addressLine2: ?string,
    addressLine3: ?string,
    addressLine4: ?string,
    city: ?string,
    cityUnlocode: ?string,
    country: ?string,
    region: ?string,
    countryIso: ?string,
    telephone: ?string
}

export type Event = {
    eventId: string,
    hostName: ?string,
    title: ?string,
    roadShowId: ?number,
    eventGroupTypeId: ?number,
    eventGroupType: ?string,
    eventType: ?string,
    eventTypeId: number,
    startDate: ?Date,
    endDate: ?Date,
    startTimeZone: ?string,
    endTimeZone: ?string,
    location1: ?Location,
    location2: ?Location,
    notes: ?string,
    persons: ?Array<Person>
}