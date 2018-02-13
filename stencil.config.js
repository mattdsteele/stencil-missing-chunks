exports.config = {
    namespace: 'up_elements',
    generateDistribution: true,
    serviceWorker: false
};

exports.devServer = {
    root: 'www',
    watchGlob: '**/**'
};
