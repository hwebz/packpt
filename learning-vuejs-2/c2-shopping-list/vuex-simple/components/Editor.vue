<template>
    <div id="note-editor">
        <textarea :value="activeNoteText" @input="editNote" class="form-control"></textarea>
    </div>
</template>

<script>
    export default {
        computed: {
            activeNoteText() {
                return this.$store.getters.activeNote.text
            }
        },
        methods: {
            editNote(e) {
                this.$store.dispatch('editNote', e);
            }
        }
    }
</script>