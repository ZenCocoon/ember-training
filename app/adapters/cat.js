import DS from 'ember-data';

export default DS.Adapter.extend({
  findAll: function(){
    return $.get('api/cat');
  },
  find: function(store, type, id, record){
    return $.get('api/cat/' + id);
  },
  deleteRecord: function(store, type, record){
    return $.ajax({
      url: 'api/cat/' + record.get('id'),
      type: 'delete'
    });
  },
  updateRecord: function(store, type, record){
    return $.ajax({
      url: 'api/cat/' + record.get('id'),
      type: 'put',
      data: {
        id: record.get('id'),
        name: record.get('name'),
        image: record.get('image')
      }
    });
  }
});
