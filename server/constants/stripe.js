const configureStripe = require('stripe');

const STRIPE_SECRET_KEY = process.env_NODE_ENV === 'production'
    ? 'sk_live_MY_SECRET_KEY'
    : 'sk_test_CcLKwOcg3TOhyuCD6US25YbG';

const stripe = configureStripe(STRIPE_SECRET_KEY);

module.exports = stripe;