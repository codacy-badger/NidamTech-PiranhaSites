module.exports = {
    src: {
        styles: 'assets/styles/',
        scripts: 'assets/scripts/',
        images: 'assets/images/',
        fonts: 'assets/fonts/'
    },
    dest: {
        styles: 'wwwroot/styles/',
        scripts: 'wwwroot/scripts/',
        images: 'wwwroot/images/',
        fonts: 'wwwroot/fonts/'
    },
    libraries:
        ['node_modules/jquery/dist/jquery.slim.min.js',
            'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js']
};