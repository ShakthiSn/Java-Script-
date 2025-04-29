(function executeRule(current, previous /*null when async*/ ) {

    var category = current.category;


    var categoryMap = {
        'software': '8a4dde73c6112278017a6a4baf547aa7',
        'hardware': '8a5055c9c61122780043563ef53438e3',
        'network': '287ebd7da9fe198100f92cc8d1d2154e',
        'database': '287ee6fea9fe198100ada7950d0b1b73',
        'inquiry': 'b85d44954a3623120004689b2d5dd60a'

    };

    if (categoryMap[category]) {
        current.assignment_group = categoryMap[category];


    }

})(current, previous);