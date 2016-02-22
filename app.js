// fetch data
domo.get('/data/v1/udon_tracker')
    .then(function(udon_tracker){
      console.log("udon_tracker", udon_tracker);
    
        var table = $('#example').DataTable( {
            scrollY:        '75vh',
            scrollCollapse: true,
            paging:         false,
            order: [[ 0, 'asc' ]],
            drawCallback: function ( settings ) {
                var api = this.api();
                var rows = api.rows( {page:'current'} ).nodes();
                var last=null;
                api.column(0, {page:'current'} ).data().each( function ( Phase, i ) {
                    if ( last !== Phase) {
                        $(rows).eq( i ).before(
                            '<tr class="Phase_group"><td colspan="42">'+Phase+'</td></tr>'
                        );

                        last = Phase;
                    }
                } );
            },
            data: udon_tracker,
            columns: [
                {
                    data: "Phase",
                    class: "Phase",
                    title: "Phase",
                    visible: false
                },
                {
                    data: null,
                    class: "column-index",
                    title: "#",
                },
                {
                    data: "is_shipstopper_sort",
                    class: "is_shipstopper",
                    title: "ship stopper",
                    visible: false
                },
                {
                    data: "issue_key",
                    class: "issue_key",
                    title: "Jira Number",
                    "render": function ( data, type, full, meta ) {
                        return '<a href="https://onjira.domo.com/browse/'+data+'" target="_blank">'+data+'</a>';
                    },
                },
                
                {
                    data: "is_shipstopper",
                    class: "is_shipstopper",
                    title: "ship stopper"
                },
          
                {
                    data: "squad_value",
                    class: "squad_value",
                    title: "Squad",
                    "render": function ( data, type, full, meta ) {
                        return '<div class="container-overflowing">'+data+'</div>';
                    },
                },
                {
                    data: "summary",
                    class: "summary",
                    title: "domoSummary",
                    "render": function ( data, type, full, meta ) {
                        return '<div class="container-overflowing">'+data+'</div>';
                    },
                },
                {
                    data: "Fix Version/s" ,
                    class: "fix-versions" ,
                    title: "Fix Version"
                },
                {
                    data: "2/8" ,
                    title: "2/8"
                },
                {
                    data: "2/9",
                    title: "2/9"
                },
                {
                    data: "2/10",
                    title: "2/10"
                },
                {
                    data: "2/11",
                    title: "2/11"
                },
                {
                    data: "2/12",
                    title: "2/12"
                },
                {
                    data: "2/15",
                    title: "2/15"
                },
                {
                    data: "2/16",
                    title: "2/16"
                },
                {
                    data: "2/17",
                    title: "2/17"
                },
                {
                    data: "2/18",
                    title: "2/18"
                },
                {
                    data: "2/19",
                    title: "2/19"
                },
                {
                    data: "2/23",
                    title: "2/23"
                },
                {
                    data: "2/24",
                    title: "2/24"
                },
                {
                    data: "2/25",
                    title: "2/25"
                },
                {
                    data: "2/26",
                    title: "2/26"
                },
                {
                    data: "2/29",
                    title: "2/29"
                },
                {
                    data: "3/1",
                    title: "3/1"
                },
                {
                    data: "3/2",
                    title: "3/2"
                },
                {
                    data: "3/3",
                    title: "3/3"
                },
                {
                    data: "3/4",
                    title: "3/4"
                },
                {
                    data: "3/7",
                    title: "3/7"
                },
                {
                    data: "3/8",
                    title: "3/8"
                },
                {
                    data: "3/9",
                    title: "3/9"
                },
                {
                    data: "3/10",
                    title: "3/10"
                },
                {
                    data: "3/11",
                    title: "3/11"
                },
                {
                    data: "3/14",
                    title: "3/14"
                },
                {
                    data: "3/15",
                    title: "3/15"
                },
                {
                    data: "3/16",
                    title: "3/16"
                },
                {
                    data: "3/17",
                    title: "3/17"
                },
                {
                    data: "3/18",
                    title: "3/18"
                },
                {
                    data: "3/21",
                    title: "3/21"
                },
            ]
        });

        table.on( 'order.dt search.dt', function () {
            table.column(1, {search:'applied', order:'applied'}).nodes().each( function (cell, i) {
                cell.innerHTML = i+1;
            } );
        } ).draw();



} );



