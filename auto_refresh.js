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
            // Checking if all tasks have been processed
            let nodes = document.querySelectorAll("g.node");
            const isDone = Array.from(nodes).map((node) => {
                return node.className.animVal.split(" ")[2];
            }).every((status) => {
                return (status != "no_status") || (status != "running") || (status != "queued");
            });

            if(isDone){
                // If all processed, clearing the interval and reloading the page
                clearInterval(autoRefreshFeature);
                document.location.reload();
            } else {
                // Otherwise, faking a click on the refresh button
                button.click();
                console.log("Refreshing Airflow interface...");
            }
        }
    }, 5000);
}