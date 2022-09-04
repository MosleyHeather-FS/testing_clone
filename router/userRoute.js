const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({
    message: 'Successful GET',
    user: {
      name: 'WDV 4416',
      address: '500 Full Sail Avenue',
      city: 'Orlando',
      state: 'FL',
      zip: '31670',
      ccNumber: '4567128923459023',
      ssn: '555-55-5555',
    },
  });
});

router.post('/', (req, res) => {
  const user = {
    name: req.body.name,
    address: req.body.address,
    city: req.body.city,
    state: req.body.state,
    zip: req.body.zip,
    ccNumber: req.body.ccNumber,
    ssn: req.body.ssn,
  };

  res.status(201).json({
    message: 'Successful Post',
    user: user,
  });
});

router.patch('/:id', (req, res) => {
  const user = {
    _id: req.params.id,
    name: req.body.name,
    address: req.body.address,
    city: req.body.city,
    state: req.body.state,
    zip: req.body.zip,
    ccNumber: req.body.ccNumber,
    ssn: req.body.ssn,
  };

  res.status(201).json({
    message: 'Successful Patch',
    user: user,
    metadata: {
      modifiedCount: 1,
      acknowledged: true,
    },
  });
});

router.delete('/:id', (req, res) => {
  const id = req.params.id;
  res.status(200).json({
    message: 'Successful Delete',
    user: null,
    id: id,
    metadata: {
      modifiedCount: 1,
      acknowledged: true,
    },
  });
});

module.exports = router;
