import React from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

import { List, ListItem } from 'components/list'
import Badge from 'components/badge'
import IconLabel from 'components/iconLabel'
import LoadingIndicator from 'components/loader'
import NoEvents from 'features/event/noEvents'
import EventDates from 'features/event/page/eventDates'
import { useSearchEvents } from 'data/event'

import styles from './eventsSelection.module.css'

const EventsSelection = ({ talkId }) => {
  const navigate = useNavigate()

  const { data: events, isLoading, isError, error } = useSearchEvents()

  const handleSelect = (eventId) => {
    navigate(`/speaker/event/${eventId}/submission/${talkId}`)
  }

  if (isLoading) return <LoadingIndicator />
  if (isError) return <div>An unexpected error has occurred: {error.message}</div>

  return (
    <List
      array={events}
      noResult={<NoEvents />}
      renderRow={({ id, name, type, address, timezone, conferenceStart, conferenceEnd }) => (
        <ListItem
          key={id}
          title={
            <div className={styles.title}>
              <span>{name}</span>
              <Badge pill outline className={styles.type}>
                {type}
              </Badge>
            </div>
          }
          subtitle={
            <>
              {type === 'CONFERENCE' && (
                <EventDates
                  startDate={conferenceStart}
                  endDate={conferenceEnd}
                  className={styles.dates}
                  timezone={timezone}
                />
              )}
              <IconLabel icon="fa fa-map-marker" label={address} />
            </>
          }
          onSelect={() => handleSelect(id)}
        />
      )}
    />
  )
}

EventsSelection.propTypes = {
  talkId: PropTypes.string.isRequired,
}

export default EventsSelection
