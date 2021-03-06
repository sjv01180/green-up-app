export default {
    about: {},
    loading: {
        isLoadingComplete: false,
        initialAuthChecked: false,
        isInitialized: false,
        loadingError: null,
        skipLoadingScreen: false
    },
    login: {
        userIsLoggedIn: null,
        initialAuthChecked: false,
        creatingUser: false,
        createUserError: null,
        user: null,
        isLoggingInViaSSO: false
    },
    profile: {},
    messages: {
        messages: {},
        loaded: false,
        invitationsLoaded: false,
        teamsLoaded: false
    },
    teamMembers: {},
    teamMembersLoaded: false,
    teams: {teams: {}, teamMembers: {}, contact: [], selectedTeam: null, locations: []},
    towns: {townData: {}},
    trashTracker: {
        trashDrops: [],
        location: null,
        collectedTrashToggle: false,
        supplyPickupToggle: true,
        uncollectedTrashToggle: true,
        trashDropOffToggle: true,
        myTrashToggle: true,
        cleanAreasToggle: true
    },
    teamSearchResults: [],
    selectedTeam: null
};
