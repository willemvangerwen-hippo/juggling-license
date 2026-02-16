const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Logic for Juggling Balls question
router.post('/juggling-balls-answer', function (req, res) {
  var balls = req.session.data['juggling-balls']

  // If they select "None", send to ineligible page
  if (balls == "None"){
    res.redirect('/ineligible-juggling')
  } else {
    res.redirect('/juggling-trick')
  }
})

// Logic for Swallow question
router.post('/swallow-answer', function (req, res) {
  var speed = req.session.data['swallow']

  // Check if they guessed "24" (Monty Python reference)
  if (speed == "24"){
    res.redirect('/check-answers')
  } else {
    res.redirect('/ineligible-swallow')
  }
})

module.exports = router