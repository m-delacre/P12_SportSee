/**Activity class contains user's sessions data
 *
 * @param {number} userId - id of user
 * @param {Object} sessions - session length
 */

 export default class Sessions {
	constructor(Sessions) {
		this.userId = Sessions.userId;
		this.sessions = Sessions.sessions.map((session) => ({
			day: session.day,
			sessionLength: session.sessionLength,
		}));
	}
}