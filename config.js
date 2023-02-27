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
      photo: 'https://czechvisual.space/_cdn/czechvisual/maildevelop/assets/profile-photo.png',
      logo: 'https://czechvisual.space/_cdn/czechvisual/maildevelop/assets/logo_maildevelop.png'
    }
  }
}
