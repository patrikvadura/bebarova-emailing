/*
  Config
  @Author: Patrik Vaďura | czechvisual
  @package maildevelop
*/

module.exports = {
  build: {
    templates: {
      source: 'src/templates',
      destination: {
        path: 'build_local',
      },
      assets: {
        source: 'src/images',
        destination: 'images',
      },
    },
  },
  locals: {
    global: {
      ig: 'https://czechvisual.space/bebarova/emailing/assets/icon_instagram.png'
    }
  }
}
