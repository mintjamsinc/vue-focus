import Vue from 'vue';

const version = '1.0.0';

const compatible = (/^2\./).test(Vue.version);
if (!compatible) {
	Vue.util.warn('VueFocus ' + version + ' only supports Vue 2.x, and does not support Vue ' + Vue.version);
}

const VueFocus = {
	install(Vue/* , options */) {
		Vue.directive('focus', {
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
		});
	},
};

export default VueFocus;
