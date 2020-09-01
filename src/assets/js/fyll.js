;(function() {
	"use strict";

	window.fyll = {
		config: {
			actionDelay: 500,
			keyPressInterval: 100,
			humanisePressInterval: true,
			focusClass: 'fyll-focus',
			complete: false
		},
		go: function(query, config) {
			if(this.isRunning) {
				return false;
			}
			if(typeof config === 'object') {
				this.config = this.helpers.mergeObjects(this.config, config);
			}
			else if(typeof config === 'function') {
				this.config.complete = config;
			}

			this.isRunning = true;
			this.queue = this.parseQuery(query);
			this.readQueue();
		},
		readQueue: function() {
			var fyll = window.fyll;
			if(!fyll.queue.length) {
				if(typeof fyll.config.complete === 'function') {
					fyll.config.complete();
				}
				fyll.isRunning = false;
				return false;
			}
			var next = fyll.queue.pop(),
				instr = fyll.parseInstruction(next),
				action = fyll.actions[instr.action];
			if(typeof action === 'object') {
				action.execute(instr.value, function() {
					if(fyll.queue.length > 0) {
						var pauseAfter = 0;
						if(action.pauseAfter) {
							pauseAfter = fyll.config.actionDelay;
						}
						setTimeout(fyll.readQueue, pauseAfter);
					} else {
						fyll.readQueue();
					}
				});
			} else {
				fyll.readQueue();
			}
		},
		parseQuery: function(instr) {
			var then = instr.split('then');
			
			for(var i=0; i < then.length; ++i) {
				then[i] = this.helpers.betterTrim(then[i]);
			}
			return then.reverse();
		},
		parseInstruction: function(query) {
			var kv = query.split(' '),
				res = {};

			res.action = kv[0];
			res.value = kv[1];

			return res;
		},
		getPressInterval: function() {
			var interval = this.config.humanisePressInterval ? this.config.keyPressInterval + ((Math.random()*1.5-.5)*100) : this.config.keyPressInterval;
			return interval;
		},
		helpers: {
			betterTrim: function(text) {
				return text.replace(/\s+(?=\s)/g, '').trim();
			},
			mergeObjects: function (originalObject, objectToAppend) {
			    for (var item in objectToAppend) {
			        if (objectToAppend.hasOwnProperty(item)) {
			            originalObject[item] = objectToAppend[item];
			        }
			    }
			    return originalObject;
			}
		},
		actionHelpers: {
			setFocus: function(target, callback) {
				var fyll = window.fyll;
				target.className += ' ' + fyll.config.focusClass;
				if(typeof callback === 'function') {
					setTimeout(callback, fyll.getPressInterval());
				}
			},
			removeFocus: function(target, callback) {
				var fyll = window.fyll;

				setTimeout(function() {
					target.className = target.className.replace(fyll.config.focusClass, '');

					if(typeof callback === 'function') {
						callback();
					}
				}, fyll.getPressInterval());
			}
		},
		actions: {
			fill: {
				pauseAfter: true,
				execute: function(value, callback) {
					var fyll = window.fyll,
						target = document.getElementById(value);

					if(!target) {
						callback();
						return false;
					}
					target.value = '';

					var fillValue = target.getAttribute('data-fyll');
					if(fillValue) {
						var letters = fillValue.split('').reverse();
						fyll.actionHelpers.setFocus(target, function() {
							var pressFunc = function() {
								target.value += letters.pop();
								if(letters.length < 1) {
									fyll.actionHelpers.removeFocus(target);
									callback();
								} else {
									setTimeout(pressFunc, fyll.getPressInterval());
								}
							}
							pressFunc();
						});
					} else {
						callback();
					}
				}
			},
			click: {
				pauseAfter: true,
				execute: function(value, callback) {
					var fyll = window.fyll,
						target = document.getElementById(value);

					if(!target) {
						callback();
						return false;
					}

					fyll.actionHelpers.setFocus(target, function() {
						fyll.actionHelpers.removeFocus(target, function() {
							callback();
						});
					});
				}
			},
			toggle: {
				pauseAfter: true,
				execute: function(value, callback) {
					var fyll = window.fyll,
						target = document.getElementById(value);

					if(!target) {
						callback();
						return false;
					}

					if(typeof target.checked === 'boolean') {
						target.checked = !target.checked;
					}
					callback();
				}
			},
			pause: {
				pauseAfter: false,
				execute: function(value, callback) {
					setTimeout(callback, value);
				}
			}
		}
	};
})();