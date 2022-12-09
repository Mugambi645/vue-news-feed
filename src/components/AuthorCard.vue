<script>
import { CreateURL } from '../utils'

export default {
	props: {
		author: {
			type: Object,
			required: true
		}
	},
	setup () {
		return {
			CreateURL
		}
	}
}
</script>