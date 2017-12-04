Fonts:

    let sizes = [
       'xsmall',
        'small',
        'normal',
        'large',
        'xlarge',
        'xxlarge',
        'xxxlarge',
    ];
    let types = [];
    let sample = "CGJQR The quick brown fox jumps over the lazy dog. 0123456789";
    for (i = sizes.length - 1; i >= 0; i--) {
        let size = sizes[i];
        var name = "Univers Next";
        var key = name + size;
        types.push(<Typography font={name} size={size} key={key} >{sample}</Typography>);
    }
    <div>
        {types}
    </div>
