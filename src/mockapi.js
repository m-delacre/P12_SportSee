import localdata from './localdata.js';
import Activity from './components/classes/activity.js';

export default function getMockedActivity(id, setActivity) {
    let userId = parseInt(id);
    setActivity(
        new Activity(
            localdata.USER_ACTIVITY.find((element) => element.userId === userId)
        )
    );
}
