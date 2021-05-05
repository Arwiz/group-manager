import GroupHandler from "../Handlers/GroupHandler.js";
export default (app) => {
    app.get('/', GroupHandler.FetchAllHandler)
}