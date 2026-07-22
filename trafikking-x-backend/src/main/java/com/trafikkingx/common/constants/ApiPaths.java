package com.trafikkingx.common.constants;

public final class ApiPaths {

    private ApiPaths() {
    }

    public static final String API_V1 = "/api/v1";

    public static final String AUTH =
            API_V1 + "/auth";

    public static final String CITIZENS =
            API_V1 + "/citizens";

    public static final String INCIDENTS =
            API_V1 + "/incidents";

    public static final String HOSPITALS =
            API_V1 + "/hospitals";

    public static final String AMBULANCES =
            API_V1 + "/ambulances";

    public static final String POLICE_STATIONS =
            API_V1 + "/police-stations";

    public static final String DISPATCHES =
            API_V1 + "/dispatches";
}