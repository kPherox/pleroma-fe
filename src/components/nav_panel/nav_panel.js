import { mapState } from 'vuex'

const NavPanel = {
  created () {
    if (this.currentUser && this.currentUser.locked) {
      this.$store.dispatch('startFetchingFollowRequests')
    }
  },
  computed: mapState({
    currentUser: state => state.users.currentUser,
    chat: state => state.chat.channel,
    followRequestCount: state => state.api.followRequests.length,
    privateMode: state => state.instance.private,
    federating: state => state.instance.federating
  })
}

export default NavPanel
