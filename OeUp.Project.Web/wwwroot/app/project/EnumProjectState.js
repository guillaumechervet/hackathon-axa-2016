var oeup;
(function (oeup) {
    (function (ProjectState) {
        ProjectState[ProjectState["Starting"] = 0] = "Starting";
        ProjectState[ProjectState["Running"] = 1] = "Running";
        ProjectState[ProjectState["Ended"] = 2] = "Ended";
    })(oeup.ProjectState || (oeup.ProjectState = {}));
    var ProjectState = oeup.ProjectState;
})(oeup || (oeup = {}));
//# sourceMappingURL=EnumProjectState.js.map