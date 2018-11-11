'use strict';

/**
 * Filtering rule model class
 * defines a firewall's filtering rule
 * see https://en.wikipedia.org/wiki/Firewall_(computing)
 * @class
 */
class FilteringRule {
    /**
     * Creates a FilteringRule
     * @param {object} properties
     * @param {string} properties.src - source IP
     * @param {string} properties.dst - destination IP
     * @param {number} properties.port - port
     */
    constructor({src = '0.0.0.0', dst = '0.0.0.0', port = 1}) {
        this.src = src;
        this.dst = dst;
        this.port = port;

        this._assertValuesAreCorrect();
    }

    /**
     * Asserts passed values are well formatted
     * @private
     * @throws Will throw error if parameter is incorrect
     */
    _assertValuesAreCorrect () {
        const ipPattern = /^(\d{1,3}\.){3}\d{1,3}$/;
        const minPort = 1;
        const maxPort = 65535;

        if (!this.src.match(ipPattern)) {
            throw new Error(`src value "${this.src}" does not match IP format`);
        }

        if (!this.dst.match(ipPattern)) {
            throw new Error(`dst value "${this.dst}" does not match IP format`);
        }

        if (this.port < minPort || this.port > maxPort) {
            throw new Error(`port value "${this.port}" must be between ${minPort} and ${maxPort}`);
        }
    }
}

module.exports = FilteringRule;