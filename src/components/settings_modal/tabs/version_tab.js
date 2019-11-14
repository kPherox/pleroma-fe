import { extractCommit } from 'src/services/version/version.service'

const pleromaFeCommitUrl = 'https://github.com/kPherox/pleroma-fe/commit/'
const pleromaBeCommitUrl = 'https://github.com/kPherox/pleroma/commit/'

const VersionTab = {
  data () {
    const instance = this.$store.state.instance
    return {
      backendVersion: instance.backendVersion,
      frontendVersion: instance.frontendVersion
    }
  },
  computed: {
    frontendVersionLink () {
      return pleromaFeCommitUrl + this.frontendVersion
    },
    backendVersionLink () {
      return pleromaBeCommitUrl + extractCommit(this.backendVersion)
    }
  }
}

export default VersionTab
