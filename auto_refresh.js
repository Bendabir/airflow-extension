const isOnRightPage = document.location.href.includes("admin/airflow/graph")
                      && document.location.href.includes("dag_id");

if(isOnRightPage){
    const autoRefreshFeature = setInterval(() => {
        const button = document.querySelector("#refresh_button"),
              status = document.querySelector(".form-inline form span");

        if(typeof status !== "undefined" && status.innerHTML !== "running"){
            return;
        }

        if(typeof button !== "undefined"){
            button.click();

            console.log("Refreshing Airflow interface...");
        }
    }, 5000);
}