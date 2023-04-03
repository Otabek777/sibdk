if($(".aside__ul")) {
    $(".aside__btn").click(function() {
        $(this).toggleClass("open");
    });
    $(".aside__ul li").children().click(function() {
        $(this).toggleClass("open");
    });
};
if(".catalog") {
    function openFilter(btnFilter, btnFilterChild) {
        $("."+btnFilter+"-filter-open").click(function () {
            if($(this).hasClass("active")) {
                $(".catalog-filter-open").removeClass("active");
                $(".options-filter-open").removeClass("active");
                $('.aside__wrap').removeClass("active");
                $('.aside').removeClass("open");
            } else {
                $(".catalog-filter-open").removeClass("active");
                $(".options-filter-open").removeClass("active");
                $(this).addClass("active");
                $('.aside__wrap').removeClass("active");
                $('.aside').addClass("open");
                $('.aside__wrap:nth-child('+btnFilterChild+')').addClass("active");
            };
        });
    };
    openFilter("catalog", "1");
    openFilter("options", "2");
};
if($(".tab")) {
    function tabBtn(btnNumber) {
        $("#tab-btn-"+btnNumber).click(function() {
            $(".tab__btn .btn").removeClass("active");
            $(".tab__block").removeClass("active");
            $(this).addClass("active");
            $("#tab-block-"+btnNumber).addClass("active");
        });
    };
    tabBtn(1);
    tabBtn(2);
    tabBtn(3);
    tabBtn(4);
};
$(window).scroll(function(){
    if ( $(this).scrollTop() > 50) {
        $('.header').addClass("fixed")
    } else {
        $('.header').removeClass("fixed")
    }
});
if($(".product__quantity")) {
    var quantity = $(".product__quantity");
    quantity.children(".plus").click(function() {
        $(this).prev(".num").val( function(i, oldval) {
            return ++oldval;
        });
    });
    quantity.children(".minus").click(function() {
        if($(this).next(".num").val() != 1) {
            $(this).next(".num").val( function(i, oldval) {
                return --oldval;
            });
        };
    });
};
if(document.querySelector('.input_phone')) {
    window.addEventListener("DOMContentLoaded", function() {
        [].forEach.call( document.querySelectorAll('.tel'), function(input) {
        var keyCode;
        function mask(event) {
            event.keyCode && (keyCode = event.keyCode);
            var pos = this.selectionStart;
            if (pos < 3) event.preventDefault();
            var matrix = "+7 (___) ___ ____",
                i = 0,
                def = matrix.replace(/\D/g, ""),
                val = this.value.replace(/\D/g, ""),
                new_value = matrix.replace(/[_\d]/g, function(a) {
                    return i < val.length ? val.charAt(i++) || def.charAt(i) : a
                });
            i = new_value.indexOf("_");
            if (i != -1) {
                i < 5 && (i = 3);
                new_value = new_value.slice(0, i)
            }
            var reg = matrix.substr(0, this.value.length).replace(/_+/g,
                function(a) {
                    return "\\d{1," + a.length + "}"
                }).replace(/[+()]/g, "\\$&");
            reg = new RegExp("^" + reg + "$");
            if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
            if (event.type == "blur" && this.value.length < 5)  this.value = ""
        }
    
        input.addEventListener("input", mask, false);
        input.addEventListener("focus", mask, false);
        input.addEventListener("blur", mask, false);
        input.addEventListener("keydown", mask, false)
    
      });
    
    });
};