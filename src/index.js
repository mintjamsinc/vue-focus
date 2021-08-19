// Copyright (c) 2021 MintJams Inc. Licensed under MIT License.

import Vue from 'vue';

const version = '1.1.0';

const compatible = (/^2\./).test(Vue.version);
if (!compatible) {
	Vue.util.warn('VueFocus ' + version + ' only supports Vue 2.x, and does not support Vue ' + Vue.version);
}

export const focus = {
	inserted(el, binding) {
		if (binding.modifiers && binding.modifiers.delay) {
			setTimeout(() => {
				Vue.nextTick(function () {
					el.focus();
				})
			}, binding.value);
			return;
		}

		Vue.nextTick(function () {
			el.focus();
		})
	},
};

const VueFocus = {
	install(Vue/* , options */) {
		Vue.directive('focus', focus);
	},
};
export default VueFocus;
