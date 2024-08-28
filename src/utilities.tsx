import { duration } from "./types"

const numberToMonth = (month: number) => {
  switch (month) {
    case 1: return 'Jan'
    case 2: return 'Feb'
    case 3: return 'Mar'
    case 4: return 'Apr'
    case 5: return 'May'
    case 6: return 'Jun'
    case 7: return 'Jul'
    case 8: return 'Aug'
    case 9: return 'Sep'
    case 10: return 'Oct'
    case 11: return 'Nov'
    case 12: return 'Dec'
    default: return ''
  }
}

export const generateDurationString = (duration: duration) => {
  let years: number
  let months: number | undefined
  let today = new Date()

  let yearDurationString: string
  let monthDurationString: string

  let durationString: string

  if (!duration.end) {
    years = today.getFullYear() - duration.start.year
  } else {
    years = duration.end.year - duration.start.year
  }

  if (duration.start.month !== undefined) {
    if (!duration.end) {
      months = today.getMonth() - duration.start.month + 1
    } else {
      months = duration.end.month - duration.start.month
    }

    if (months <= -1) {
      years = years - 1
      months = months + 12
    }
  }

  if (duration.start.month === 0 || duration.end?.month === 0) {
    years = years + 1
  }

  if (years === 0) yearDurationString = ''
  else if (years === 1) yearDurationString = years + ' yr'
  else yearDurationString = years + ' yrs'

  if (months === 0 || months == undefined) monthDurationString = ''
  else if (months === 1) monthDurationString = months + ' mo'
  else monthDurationString = months + ' mos'

  if (!duration.end) {
    if (yearDurationString === '') durationString = numberToMonth(duration.start.month) + ' ' + duration.start.year.toString() + ' (' + monthDurationString + ')'
    else if (monthDurationString === '') durationString = numberToMonth(duration.start.month) + ' ' + duration.start.year.toString() + ' (' + yearDurationString + ')'
    else durationString = numberToMonth(duration.start.month) + ' ' + duration.start.year.toString() + ' (' + yearDurationString + ', ' + monthDurationString + ')'
  } else {
    if (yearDurationString === '') durationString = numberToMonth(duration.start.month) + ' ' + duration.start.year.toString() + ' - ' + numberToMonth(duration.end.month) + ' ' + duration.end.year.toString() + ' (' + monthDurationString + ')'
    else if (monthDurationString === '') durationString = numberToMonth(duration.start.month) + ' ' + duration.start.year.toString() + ' - ' + numberToMonth(duration.end.month) + ' ' + duration.end.year.toString() + ' (' + yearDurationString + ')'
    else durationString = numberToMonth(duration.start.month) + ' ' + duration.start.year.toString() + ' - ' + numberToMonth(duration.end.month) + ' ' + duration.end.year.toString() + ' (' + yearDurationString + ', ' + monthDurationString + ')'
  }


  return durationString
}