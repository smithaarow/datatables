// fetch data
domo.get('/data/v1/udon_tracker')
    .then(function(udon_tracker){
      console.log("udon_tracker", udon_tracker);

        // Initialize Datatable
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
                    title: "Ship Stopper"
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
                    title: "Summary",
                    "render": function ( data, type, full, meta ) {
                        return '<div class="container-overflowing">'+data+'</div>';
                    },
                },
                { data: "Fix Version/s" , class: "fix-versions" , title: "Fix Version" },
                { data: "2/8" , title: "2/8", sortable: false, visible: false, },
                { data: "2/9", title: "2/9", sortable: false, visible: false, },
                { data: "2/10", title: "2/10", sortable: false, visible: false, },
                { data: "2/11", title: "2/11", sortable: false, visible: false, },
                { data: "2/12", title: "2/12", sortable: false, visible: false,},
                { data: "2/15", title: "2/15", sortable: false, visible: false, },
                { data: "2/16", title: "2/16", sortable: false, visible: false, },
                { data: "2/17", title: "2/17", sortable: false, visible: false, },
                { data: "2/18", title: "2/18", sortable: false, visible: false, },
                { data: "2/19", title: "2/19" , sortable: false, visible: false,},
                { data: "2/23", title: "2/23", sortable: false, },
                { data: "2/24", title: "2/24", sortable: false, },
                { data: "2/25", title: "2/25", sortable: false, },
                { data: "2/26", title: "2/26", sortable: false, },
                { data: "2/29", title: "2/29", sortable: false, },
                { data: "3/1", title: "3/1", sortable: false, },
                { data: "3/2", title: "3/2", sortable: false, },
                { data: "3/3", title: "3/3", sortable: false, },
                { data: "3/4", title: "3/4", sortable: false, },
                { data: "3/7", title: "3/7", sortable: false, },
                { data: "3/8", title: "3/8", sortable: false, },
                { data: "3/9", title: "3/9", sortable: false, },
                { data: "3/10", title: "3/10", sortable: false, },
                { data: "3/11", title: "3/11", sortable: false, },
                { data: "3/14", title: "3/14", sortable: false, },
                { data: "3/15", title: "3/15", sortable: false, },
                { data: "3/16", title: "3/16", sortable: false, },
                { data: "3/17", title: "3/17", sortable: false, },
                { data: "3/18", title: "3/18", sortable: false, },
                { data: "3/21", title: "3/21", sortable: false, },
            ]
        });

        // Redraw index on every new sort or search
        table.on( 'order.dt search.dt', function () {
            table.column(1, {search:'applied', order:'applied'}).nodes().each( function (cell, i) {
                cell.innerHTML = i+1;
            } );
        } ).draw();


        // Toggle visibility of columns
        $('a.toggle-vis').on( 'click', function (e) {
            e.preventDefault();

            for ( var i=8 ; i<18 ; i++ ) {
                //table.column( i ).visible( false, false );
                table.column( i ).visible( ! table.column( i ).visible() );
            }
            // adjust column sizing and redraw
            table.columns.adjust().draw( false );

        } );

        // Reset Sorting
        $('a.reset-sort').on( 'click', function (e) {
            e.preventDefault();

            table.order([ 0, 'asc' ]).draw();

        } );


} );


