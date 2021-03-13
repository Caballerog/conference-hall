import { body, param } from 'express-validator'

const falsy = { checkFalsy: true }

export const EventPatch = [
  param('eventId').notEmpty().isNumeric().toInt(),
  body('name').trim().optional(falsy).isString(),
  body('description').trim().optional(falsy).isString(),
  body('visibility').trim().optional(falsy).isIn(['PUBLIC', 'PRIVATE']),
  body('address').trim().optional(falsy).isString(),
  body('lat').trim().optional(falsy).toFloat().isNumeric(),
  body('lng').trim().optional(falsy).toFloat().isNumeric(),
  body('timezone').trim().optional(falsy).isString(),
  body('contact').trim().optional(falsy).isEmail(),
  body('website').trim().optional(falsy).isURL(),
  body('conferenceStart').trim().optional(falsy).toDate(),
  body('conferenceEnd').trim().optional(falsy).toDate(),
  body('organizationId').trim().optional(falsy).toInt().isNumeric(),
  body('cfpStart').trim().optional(falsy).toDate(),
  body('cfpEnd').trim().optional(falsy).toDate(),
  body('maxProposals').trim().optional(falsy).isNumeric().toInt(),
  body('formatsRequired').trim().optional(falsy).isBoolean().toBoolean(),
  body('categoriesRequired').trim().optional(falsy).isBoolean().toBoolean(),
  body('bannerUrl').trim().optional(falsy).isURL(),
  body('deliberationEnabled').trim().optional(falsy).isBoolean().toBoolean(),
  body('displayOrganizersRatings').trim().optional(falsy).isBoolean().toBoolean(),
  body('displayProposalsRatings').trim().optional(falsy).isBoolean().toBoolean(),
  body('displayProposalsSpeakers').trim().optional(falsy).isBoolean().toBoolean(),
  body('surveyEnabled').trim().optional(falsy).isBoolean().toBoolean(),
  body('surveyQuestions').optional(falsy),
  body('slackWebhookUrl').trim().optional(falsy).isURL(),
  body('slackNotifSubmitted').trim().optional(falsy).isBoolean().toBoolean(),
  body('apiKey').trim().optional(falsy).isString(),
  body('archived').trim().optional(falsy).isBoolean().toBoolean(),
]
