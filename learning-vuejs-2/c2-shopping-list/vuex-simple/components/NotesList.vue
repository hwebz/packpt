<template>
    <div id="notes-list">
        <div id="list-header">
            <h2>Notes</h2>

            <div class="btn-group btn-group-justified">
                <div class="btn-group">
                    <button type="button" class="btn btn-default" @click="show = 'all'" :class="{active: show === 'all'}">All Notes</button>
                </div>
                <div class="btn-group">
                    <button type="button" class="btn btn-default" @click="show = 'favorites'" :class="{active: show === 'favorites'}">Favorites</button>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="list-group">
                <a v-for="note in filteredNotes" class="list-group-item" href="#" @click="updateActiveNote(note)">
                    <h4 class="list-group-item heading">
                        {{ note.text.trim().substring(0, 30) }}
                    </h4>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                show: 'all'
            }
        },
        computed: {
            filteredNotes() {
                let notes = this.$store.getters.notes
                if (this.show == 'all') {
                    return notes;
                } else if (this.show == 'favorites') {
                    return notes.filter(note => note.favorite);
                }
            }
        },
        methods: {
            updateActiveNote(note) {
                this.$store.dispatch('updateActiveNote', note)
            }
        }
    }
</script>