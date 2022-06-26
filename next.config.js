module.exports = {
	webpack: function (config) {
		config.module.rules.push({
			test: /\.md$/,
			type: "asset/source"
		})
		config.module.rules.push({
			test: /\.crd$/,
			type: "asset/source"
		})
		return config
	}
}