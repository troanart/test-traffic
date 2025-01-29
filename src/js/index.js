
    $(document).ready(function () {
        // Первый ползунок (1-12 месяцев)
        $("#range").ionRangeSlider({
            skin: "round",
            type: "single",
            min: 1,
            max: 12,
            from: 1,
            step: 1,
            grid: true,
            grid_snap: true,
            grid_num: 5,
            values: [
                "1 month", "3 month", "6 month", "9 month", "12 month"
            ],
            
        });

        // Второй ползунок (300$ - 15,000$)
        $("#range2").ionRangeSlider({
            skin: "round",
            type: "single",
            min: 0,
        max: 10000,
        from: 777,
        step: 1,            // default 1 (set step)
        grid: true,         // default false (enable grid)
        grid_num: 4,        // default 4 (set number of grid cells)
        grid_snap: false ,
        postfix: " €"
        });
    });

