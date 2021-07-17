import _ from 'lodash';

const actions = {
  async addLine (context, payload) {
    await this.$shopify.checkout.addLineItems(context.getters.checkoutId, [ payload ]).then((checkout) => {
      context.commit('setCount', _.get(checkout, 'lineItems.length', 0));
      context.commit('setCheckout', checkout);
    });
  },

  async removeLineItem(context, payload) {
    await this.$shopify.checkout.removeLineItems(context.getters.checkoutId, [ payload ]).then((checkout) => {
      context.commit('setCount', _.get(checkout, 'lineItems.length', 0));
      context.commit('setCheckout', checkout);
    });
  },

  async updateLineItemQuantity(context, payload) {
    await this.$shopify.checkout.updateLineItems(context.getters.checkoutId, [
      payload
    ]).then((checkout) => {
      context.commit('setCount', _.get(checkout, 'lineItems.length', 0));
      context.commit('setCheckout', checkout);
    })
  },

  async fetchCheckout(context) {
    let checkoutId = localStorage.getItem('checkoutId');

    if (checkoutId) {
      const checkout = await this.$shopify.checkout.fetch(checkoutId);
      checkoutId = _.get(checkout, 'id', null);
      context.commit('setCount', _.get(checkout, 'lineItems.length', 0));
      context.commit('setCheckout', checkout);
    }

    if (!checkoutId) {
      const checkout = await this.$shopify.checkout.create();
      checkoutId = _.get(checkout, 'id', null);
      context.commit('setCount', 0);
      context.commit('setCheckout', checkout);
    }

    localStorage.setItem('checkoutId', checkoutId);
    context.commit('setCheckoutId', checkoutId);
  }
}

export default actions;
