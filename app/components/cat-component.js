import Ember from 'ember';

export default Ember.Component.extend({
  isEditing: false,

  disableEdit: function() {
    return !this.get('canEdit');
  }.property('canEdit'),

  actions: {
    edit: function() {
      this.set('isEditing', true);
      this.sendAction('edit');
    },

    cancel: function() {
      this.set('isEditing', false);
      this.sendAction('cancel');
    },

    save: function(cat) {
      this.set('isEditing', false);
      this.sendAction('save');
      cat.save();
    },

    delete: function(cat) {
      // Could also use cat.destroyRecord() which would perform
      // deleteRecord() and save() at once.
      cat.deleteRecord();
      cat.save();
    }
  }
});
