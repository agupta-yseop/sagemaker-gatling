var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "630",
        "ok": "630",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "10383",
        "ok": "10383",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "26290",
        "ok": "26290",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "22775",
        "ok": "22775",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2749",
        "ok": "2749",
        "ko": "-"
    },
    "percentiles1": {
        "total": "23706",
        "ok": "23706",
        "ko": "-"
    },
    "percentiles2": {
        "total": "25020",
        "ok": "25020",
        "ko": "-"
    },
    "percentiles3": {
        "total": "25848",
        "ok": "25848",
        "ko": "-"
    },
    "percentiles4": {
        "total": "26172",
        "ok": "26172",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 630,
        "percentage": 100
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "0.947",
        "ok": "0.947",
        "ko": "-"
    }
},
contents: {
"req_sagemaker-llm-l-b6a79": {
        type: "REQUEST",
        name: "SageMaker-llm-llama2-70b-chat-tgi-staging",
path: "SageMaker-llm-llama2-70b-chat-tgi-staging",
pathFormatted: "req_sagemaker-llm-l-b6a79",
stats: {
    "name": "SageMaker-llm-llama2-70b-chat-tgi-staging",
    "numberOfRequests": {
        "total": "630",
        "ok": "630",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "10383",
        "ok": "10383",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "26290",
        "ok": "26290",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "22775",
        "ok": "22775",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2749",
        "ok": "2749",
        "ko": "-"
    },
    "percentiles1": {
        "total": "23706",
        "ok": "23706",
        "ko": "-"
    },
    "percentiles2": {
        "total": "25020",
        "ok": "25020",
        "ko": "-"
    },
    "percentiles3": {
        "total": "25848",
        "ok": "25848",
        "ko": "-"
    },
    "percentiles4": {
        "total": "26172",
        "ok": "26172",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 630,
        "percentage": 100
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "0.947",
        "ok": "0.947",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
