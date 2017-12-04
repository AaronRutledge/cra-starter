import React from 'react';
import moment from 'moment-timezone';
import numeral from 'numeral';

import ColorChip from '../components/ColorChip/ColorChip';
import { otherColor } from './siteConstants';

export const nullResponseCharacter = '';
numeral.nullFormat(nullResponseCharacter);

const lightGray = {
  color: '#D8D8D8'
}
const medGray = {
  color: '#999999'
}
const darkBlue = {
  color: '#4D6474'
}



export const booleanFormatter = (value, obj, prop, style) => boolIconPicker(obj, prop, style);

export const tableDateFormatter = (value, obj, prop) => dateFormatter(prop, value);

export const dateFormatter = (format, value) => {
  const now = moment();
  const time = moment(value);

  // parseZone allows you to keep the zone the timestamp has on it
  // moment will automatically parse into your local

  if (time.isValid()) {
    let zone,
      zoneTime,
      timeAbbreviation;
    switch (format) {
      case 'zoneTime':
        return time.parseZone().format('HH:mm');
      case 'localTime':
        return time.format('HH:mm');
      case 'roadshow-nav':
        return time.parseZone().format('ddd DD');
      case 'roadshow':
        if (now.isSame(time, 'day')) {
          return `Today ${time.parseZone().format('DD MMM')}`;
        }
        return time.parseZone().format('ddd DD MMM');
      case 'dayMonth':
        if (now.isSame(time, 'day')) {
          return time.format('HH:mm');
        }
        return time.format('DD MMM');
      case 'dayMonthYearZone':
        zone = moment.tz.zone(moment.tz.guess(Date.now()));
        zoneTime = moment.tz(time, zone.name);
        timeAbbreviation = zone.abbr(Date.now());
        timeAbbreviation = ((timeAbbreviation[0] === '+' || timeAbbreviation === '-') ? 'GMT' : '') + timeAbbreviation;
        return `${zoneTime.format('DD MMMM, YYYY HH:mm')} ${timeAbbreviation}`;
      case 'dayMonthYearZoneShort':
        zone = moment.tz.zone(moment.tz.guess(Date.now()));
        zoneTime = moment.tz(time, zone.name);
        timeAbbreviation = zone.abbr(Date.now());
        timeAbbreviation = ((timeAbbreviation[0] === '+' || timeAbbreviation === '-') ? 'GMT' : '') + timeAbbreviation;
        return `${zoneTime.format('DD MMM, YYYY HH:mm')} ${timeAbbreviation}`;
      case 'dayMonthYear':
      default:
        if (now.isSame(time, 'day')) {
          return time.format('HH:mm');
        }
        return time.format('DD MMM, YYYY');
    }
  } else {
    return nullResponseCharacter;
  }
};

export const colorChipFormatter = (val, obj, prop, index) => {
  //TODO:  Consolidate color handling
const colorHex = (val.toLowerCase() ==='other') ? otherColor : prop[index % prop.length];
return <ColorChip fullChip description={titleHover(val)} colorHex={colorHex} />
};
export const colorChipFormatterEl = (val, obj, prop, index) => {
  //TODO:  Consolidate color handling
const colorHex = (val.toLowerCase() ==='other') ? otherColor : prop[index % prop.length];
return <ColorChip fullChip description={titleHoverEl(val)} colorHex={colorHex} />
};
export const titleHover = (val) => `<span title="${val}">${val}</span>`;
export const titleHoverEl = (val) => <span title={val}>{val}</span>;

export const prependCount = (val, obj, prop, index) => `<span class='text-muted details-table-prepend-index'>${(index + 1)}</span> <div class='details-table-prepend-body'>${titleHover(val)}</div>`;

export const accessor = (val, obj, prop) => {
  prop = prop.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
  prop = prop.replace(/^\./, ''); // strip a leading dot
  const propsToAccess = prop.split('.');
  for (let i = 0; i < propsToAccess.length; i++) {
    const currentProp = propsToAccess[i];
    if (currentProp in obj) {
      if (obj instanceof Object) {
        obj = obj[currentProp];
      }
    } else {
      return nullResponseCharacter;
    }
  }
  return ((typeof obj === 'undefined') || obj === null) ? nullResponseCharacter : obj;
};

export const summer = (arrayProp, val, obj, prop) => {
  // drill down to array if nested
  const summee = accessor(val, obj, prop);

  if (obj && summee) {
    return summee.reduce((runningTotal, currentEl) => {
      if (arrayProp) {
        // If number is inside array of objects
        return runningTotal + +currentEl[arrayProp];
      } else {
        // array of numbers
        return runningTotal + +currentEl;
      }
    }, 0);
  } else {
    return null;
  }
};

export const badNumFormatter = (val) => (typeof val !== 'number') ? '' : val;

export const percentFormatter = (val, obj, short) => ((typeof val === 'number') ? `${val.toFixed(short ? 1 : 2)}%` : `${nullResponseCharacter}`);

export const percentFormatterWithDecimals = (val, numDecimals) => ((typeof val === 'number') ? `${val.toFixed(numDecimals ? numDecimals : 0)}%` : `${nullResponseCharacter}`);

export const nullValFormatter = (val) => (((typeof val === 'undefined') || val === null) ? nullResponseCharacter : val);

export const commaFormatter = (val) => {
  if ((typeof val === 'undefined') || val === null) {
    return nullResponseCharacter;
  }
  if (val >= 1000) {
    return numeral(val).format('0,0');
  } else {
    return numeral(val).format('0,0.00');
  }

};

export const commaDecimalFormatter = (val) => (((typeof val === 'undefined') || val === null || (typeof val !== 'number')) ? nullResponseCharacter : commaFormatter(val.toFixed(2)));

export const millionFormatter = (val) => {
  if (typeof val === 'number') {
    return commaFormatter(val / 1000000);
  }
};

// Used on Order Book Summary Chart Dates to convert long string date to abbreviated format
export const abbreviateFullDate = (fullDate) => {
  if (fullDate === 'Other') {
    return 'Other';
  }
  return moment(fullDate).format('MMM DD');
};

export const totalOrderFormatter = (amount, obj) => {
  if ((typeof amount === 'undefined') || amount === null) {
    return '--';
  }

  let totalOrder = "<span class='order-amount'>" + amount + "</span> <span class='order-currency'>" + obj.currency + "</span>";

  return totalOrder;
};

export const choosePhoneFormatter = (person) =>{

  if(person.directTelephone){
    return `T: ${person.directTelephone}`
  }
  else if(person.mobileTelephone){
    return `M: ${person.mobileTelephone}`
  }
  else{
    return (<span>&nbsp;</span>)
  }

}
export const timeAbbr = () => {
  let abbr = moment.tz.zone(moment.tz.guess()).abbr(Date.now());
  return ((timeAbbr[0] === '+' || timeAbbr === '-') ? 'GMT' : '') + abbr;
}

export const renderDateTime = (date, timeZone) => {
  return(
  <div className="text-univ-lt" style={{fontSize: "12px", color: "#999", lineHeight: "16px"}}>
      <span>{dateFormatter('dayMonthYear', date)}</span>&nbsp;
      <span>{dateFormatter('zoneTime', date) + " " + timeZone}</span>
  </div>)
}