export default interface Columns {
// unique id
    // identifies column
    // (used by pagination.sortBy, "body-cell-[name]" slot, ...)
    name: string,

    // label for header
    label: string,

    // row Object property to determine value for this column
    field: string,
    // OR field: row => row.some.nested.prop,

    // (optional) if we use visible-columns, this col will always be visible
    required: boolean,

    // (optional) alignment
    align: "left" | "right" | "center",

    // (optional) tell QTable you want this column sortable
    sortable: boolean,

    // (optional) compare function if you have
    // some custom data or want a specific way to compare two rows
    // --> note that rows with null/undefined as value will get auto sorted
    // without calling this method (if you want to handle those as well, use "rawSort" instead)
    sort: (a: string, b: string, rowA: string, rowB: string) => number,
    // function return value:
    //   * is less than 0 then sort a to an index lower than b, i.e. a comes first
    //   * is 0 then leave a and b unchanged with respect to each other, but sorted with respect to all different elements
    //   * is greater than 0 then sort b to an index lower than a, i.e. b comes first

    // (optional) requires Quasar v2.13+
    // compare function if you have
    // some custom data or want a specific way to compare two rows
    // --> note that there is an alternative "sort" method (above) if you don't
    // want to handle (by yourself) rows with null/undefined as value
    rawSort: (a: string, b: string, rowA: string, rowB: string) => number,
    // has the same return value as the alternative "sort" method above

    // (optional) override 'column-sort-order' prop;
    // sets column sort order: 'ad' (ascending-descending) or 'da' (descending-ascending)
    sortOrder: 'ad' | 'da', // or 'da'

    // (optional) you can format the data with a function
    format: (val: string | number | boolean, row: string | number | boolean) => string | number | boolean,
    // one more format example:
    // format: val => val
    //   ? /* Unicode checkmark checked */ "\u2611"
    //   : /* Unicode checkmark unchecked */ "\u2610",

    // body td:
    style: string,
    // or as Function --> style: row => ... (return String/Array/Object)
    classes: string,
    // or as Function --> classes: row => ... (return String)

    // header th:
    headerStyle: string,
    headerClasses: string
}
