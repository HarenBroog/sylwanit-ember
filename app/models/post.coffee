import DS from 'ember-data'

Post = DS.Model.extend
  title:        DS.attr('string')
  body:         DS.attr('string')
  owner_id:     DS.attr('string')
  category_id:  DS.attr('number')
  photo:        DS.attr('string')
  created_at:   DS.attr('date')
  updated_at:   DS.attr('date')

export default Post
