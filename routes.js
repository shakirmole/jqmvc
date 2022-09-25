const routes = {
    sign_in : { controller: "authenticate" , action : "sign_in" },
    logout : { controller: "authenticate" , action : "logout" },
    home : { controller: "home" , action : "home" }
};

const defaultRoutes = {
    not_found: { controller: "default_routes", action : "not_found" }
}

function searchForRoute(route) {
    var pageRedirect;
    if ( route in routes ) {
        pageRedirect = { controller: routes[route].controller, action: routes[route].action }
    } else {
        pageRedirect = { controller: defaultRoutes.not_found.controller, action: defaultRoutes.not_found.action }
    }

    return pageRedirect;
}