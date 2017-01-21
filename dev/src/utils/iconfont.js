;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-all" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M460.8 486.4 486.4 486.4 486.4 460.8 486.4 243.2C486.4 108.884349 377.51565 0 243.2 0 108.884349 0 0 108.884349 0 243.2 0 377.51565 108.884349 486.4 243.2 486.4L460.8 486.4ZM51.2 243.2C51.2 137.161328 137.161328 51.2 243.2 51.2 349.238671 51.2 435.2 137.161328 435.2 243.2L435.2 460.8 460.8 435.2 243.2 435.2C137.161328 435.2 51.2 349.238671 51.2 243.2Z"  ></path>' +
    '' +
    '<path d="M460.8 588.8 435.2 563.2 435.2 780.8C435.2 886.838671 349.238671 972.8 243.2 972.8 137.161328 972.8 51.2 886.838671 51.2 780.8 51.2 674.761329 137.161328 588.8 243.2 588.8L460.8 588.8ZM0 780.8C0 915.11565 108.884349 1024 243.2 1024 377.51565 1024 486.4 915.11565 486.4 780.8L486.4 563.2 486.4 537.6 460.8 537.6 243.2 537.6C108.884349 537.6 0 646.48435 0 780.8Z"  ></path>' +
    '' +
    '<path d="M563.2 435.2 588.8 460.8 588.8 243.2C588.8 137.161328 674.761329 51.2 780.8 51.2 886.838671 51.2 972.8 137.161328 972.8 243.2 972.8 349.238671 886.838671 435.2 780.8 435.2L563.2 435.2ZM1024 243.2C1024 108.884349 915.11565 0 780.8 0 646.48435 0 537.6 108.884349 537.6 243.2L537.6 460.8 537.6 486.4 563.2 486.4 780.8 486.4C915.11565 486.4 1024 377.51565 1024 243.2Z"  ></path>' +
    '' +
    '<path d="M1024 780.8C1024 646.48435 915.11565 537.6 780.8 537.6L563.2 537.6 537.6 537.6 537.6 563.2 537.6 780.8C537.6 915.11565 646.48435 1024 780.8 1024 818.513163 1024 855.051123 1015.390662 888.179087 999.065099 900.861235 992.815296 906.075682 977.467919 899.825882 964.785773 893.576079 952.103625 878.228702 946.889178 865.546554 953.138978 839.420429 966.014014 810.620764 972.8 780.8 972.8 674.761329 972.8 588.8 886.838671 588.8 780.8L588.8 563.2 563.2 588.8 780.8 588.8C886.838671 588.8 972.8 674.761329 972.8 780.8 972.8 799.469549 970.142607 817.755731 964.968006 835.279443 960.963957 848.839106 968.71031 863.07731 982.269973 867.081361 995.829636 871.085412 1010.06784 863.339057 1014.071891 849.779394 1020.63305 827.560122 1024 804.391296 1024 780.8Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-comments" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M131.253515 789.333333C87.810305 789.333333 52.51282 753.473975 52.51282 709.41763L52.51282 69.333333 26.25641 96 892.853331 96C936.231586 96 971.487179 131.853286 971.487179 175.915703L971.487179 816 997.74359 789.333333 525.128205 789.333333 517.234323 789.333333 510.649171 793.754413 285.912493 944.636066C273.815607 952.757562 270.491629 969.301024 278.488179 981.586923 286.484727 993.872821 302.773675 997.248736 314.87056 989.127241L539.607238 838.245587 525.128205 842.666667 997.74359 842.666667 1024 842.666667 1024 816 1024 175.915703C1024 102.41369 965.24899 42.666667 892.853331 42.666667L26.25641 42.666667 0 42.666667 0 69.333333 0 709.41763C0 782.925715 58.804881 842.666667 131.253515 842.666667L268.117303 842.666667C282.618319 842.666667 294.373713 830.727593 294.373713 816 294.373713 801.272407 282.618319 789.333333 268.117303 789.333333L131.253515 789.333333Z"  ></path>' +
    '' +
    '<path d="M367.589743 442.666667C367.589743 383.756294 320.568162 336 262.564102 336 204.560043 336 157.538461 383.756294 157.538461 442.666667 157.538461 501.577039 204.560043 549.333333 262.564102 549.333333 320.568162 549.333333 367.589743 501.577039 367.589743 442.666667ZM210.051282 442.666667C210.051282 413.211479 233.562074 389.333333 262.564102 389.333333 291.566133 389.333333 315.076924 413.211479 315.076924 442.666667 315.076924 472.121854 291.566133 496 262.564102 496 233.562074 496 210.051282 472.121854 210.051282 442.666667Z"  ></path>' +
    '' +
    '<path d="M630.153845 442.666667C630.153845 383.756294 583.132265 336 525.128205 336 467.124145 336 420.102564 383.756294 420.102564 442.666667 420.102564 501.577039 467.124145 549.333333 525.128205 549.333333 583.132265 549.333333 630.153845 501.577039 630.153845 442.666667ZM472.615386 442.666667C472.615386 413.211479 496.126176 389.333333 525.128205 389.333333 554.130236 389.333333 577.641026 413.211479 577.641026 442.666667 577.641026 472.121854 554.130236 496 525.128205 496 496.126176 496 472.615386 472.121854 472.615386 442.666667Z"  ></path>' +
    '' +
    '<path d="M892.717948 442.666667C892.717948 383.756294 845.696367 336 787.692307 336 729.688247 336 682.666667 383.756294 682.666667 442.666667 682.666667 501.577039 729.688247 549.333333 787.692307 549.333333 845.696367 549.333333 892.717948 501.577039 892.717948 442.666667ZM735.179488 442.666667C735.179488 413.211479 758.690278 389.333333 787.692307 389.333333 816.694338 389.333333 840.205129 413.211479 840.205129 442.666667 840.205129 472.121854 816.694338 496 787.692307 496 758.690278 496 735.179488 472.121854 735.179488 442.666667Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-more" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M642.174253 504.59418C650.164439 511.835287 650.070886 522.174253 641.84009 529.376198L332.618569 799.94503C323.751654 807.703582 322.853148 821.181184 330.611697 830.048098 338.370249 838.915012 351.847851 839.813519 360.714765 832.05497L669.936288 561.486138C697.36486 537.486138 697.727953 497.358861 670.825747 472.978737L360.992414 192.192278C352.26205 184.280386 338.770837 184.943889 330.858944 193.674252 322.947053 202.404616 323.610556 215.895829 332.340919 223.807723L642.174253 504.59418Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-search" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M1001.526404 991.699618C999.922771 986.822379 999.922771 986.822379 998.661741 984.531443 997.556333 982.547938 996.293839 980.724943 994.702325 978.653549 992.500075 975.787264 989.423708 972.169135 985.358477 967.619563 978.223881 959.634933 967.82403 948.546074 954.04227 934.18551 932.495573 911.733901 910.909628 889.684252 858.479859 836.391998 806.561909 783.619985 784.782022 761.370402 763.425645 739.113463 750.035742 725.158933 739.986204 714.441517 733.331893 706.993367 730.0273 703.294545 727.65239 700.501581 726.365602 698.828322 727.222236 700.438869 727.222236 700.438869 728.57702 704.41879 730.685899 711.913483 730.685899 711.913483 721.610157 729.174018 803.853596 649.91606 851.33145 539.987051 851.33145 422.399774 851.33145 189.11482 665.530044 0 436.332393 0 207.134741 0 21.333333 189.11482 21.333333 422.399774 21.333333 655.684727 207.134741 844.799548 436.332393 844.799548 441.356706 844.799548 446.556279 844.56416 452.347883 844.11767 456.487002 843.798575 460.079727 843.454155 466.651669 842.776804 479.958906 841.405269 484.804847 841.014569 490.397372 841.014558 499.896397 841.014541 514.964663 837.646929 537.39015 831.429666 540.021178 830.700239 542.719546 829.938705 545.476431 829.148403 553.976567 826.711712 562.667765 824.108471 571.097184 821.505798 576.160226 819.942528 580.026436 818.721914 582.233225 818.013231 595.480279 813.759108 602.830912 799.380094 598.651326 785.896804 594.471738 772.413515 580.344653 764.931795 567.097598 769.18592 565.058735 769.840674 561.367413 771.006074 556.494825 772.510539 548.364858 775.020755 539.986116 777.530404 531.839533 779.865745 529.217662 780.617342 526.657771 781.339795 524.170112 782.029476 506.936476 786.807345 493.480702 789.814579 490.397278 789.814586 482.458716 789.814601 476.720548 790.277235 461.583853 791.837329 455.416051 792.473024 452.140828 792.787008 448.548723 793.063932 443.933724 793.419714 439.960704 793.599575 436.332393 793.599575 234.916275 793.599575 71.63625 627.407763 71.63625 422.399774 71.63625 217.391785 234.916275 51.199973 436.332393 51.199973 637.74851 51.199973 801.028533 217.391785 801.028533 422.399774 801.028533 525.775443 759.336083 622.309077 687.025254 691.994987 677.769918 709.563029 677.769918 709.563029 679.976768 717.62707 681.566101 722.305182 681.566101 722.305182 682.808947 724.550298 683.910231 726.511657 685.170219 728.326692 686.754421 730.386692 688.964348 733.260343 692.047349 736.886044 696.115554 741.439575 703.261474 749.437982 713.66454 760.532418 727.438434 774.887134 749.001325 797.359294 770.84669 819.675765 822.916311 872.601946 875.194278 925.7399 896.716879 947.724843 918.057933 969.962174 931.455439 983.922347 941.502012 994.634524 948.144469 1002.068378 951.440527 1005.757135 953.805218 1008.538259 955.077419 1010.194061 954.139053 1008.441707 954.139053 1008.441707 952.75811 1004.249822 950.686453 996.172693 950.686453 996.172693 960.850534 978.849743 950.24269 987.977788 948.913429 1004.130236 957.881542 1014.927251 966.849655 1025.724265 982.719104 1027.077231 993.326948 1017.949188 1003.683753 1000.332838 1003.683753 1000.332838 1001.526404 991.699618Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-set" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M825.606018 647.538283 819.263571 660.258455 827.207981 672.04471 905.327294 787.941807 908.52362 756.858321 769.540324 892.373873 799.04025 888.884996 671.47766 812.883319 660.919793 806.592954 649.583401 811.338837C641.524386 814.712674 633.321491 817.795042 625.041941 820.560337L611.811631 824.979142 608.915804 838.623962 580.996546 970.176486 604.846304 950.857143 408.272431 950.857141 431.938677 969.378097 397.841517 831.672939 394.800523 819.391548 383.007648 814.808062C375.650317 811.948518 368.359849 808.829278 361.19018 805.473457L349.017562 799.775966 337.701214 807.026784 217.88134 883.799985 248.055031 886.871665 109.071736 751.363721 112.710251 781.768288 190.651237 657.409417 197.546671 646.407394 192.26576 634.545545C188.597667 626.306366 185.255827 617.89434 182.266902 609.377882L177.674889 596.293685 164.082002 593.552105 29.201333 566.347718 48.761905 590.247401 48.761905 398.59747 29.96636 422.330022 171.221091 389.086012 183.450436 386.207861 188.204044 374.578423C191.634415 366.18621 195.421037 357.903851 199.530538 349.803328L205.959792 337.130182 198.101254 325.29011 124.686421 214.679584 121.526273 245.488151 259.687038 108.701216 229.912147 112.235203 352.693357 186.524314 363.287226 192.934163 374.712497 188.161388C381.330477 185.396804 388.053308 182.826231 394.835279 180.46681L407.314641 176.12529 410.490432 163.299629 443.437389 30.241004 419.771153 48.761905 616.327194 48.761905 592.477417 29.442474 621.325088 165.37204 624.105103 178.471403 636.651202 183.152979C646.841886 186.955632 656.865493 191.232395 666.627682 195.943104L678.796045 201.814904 690.225485 194.609697 803.674639 123.090468 773.791902 120.057533 914.162801 254.754833 910.479401 224.06547 834.210227 343.81367 827.217813 354.792273 832.449542 366.710857C836.047972 374.908567 839.325363 383.281107 842.252943 391.75287L846.63933 404.446089 859.712006 407.52234 994.034289 439.130935 975.238095 415.398229 975.238095 607.04816 994.798163 583.14858 852.982818 611.75475 840.250379 614.323063 835.279123 626.322974C832.31875 633.468898 829.086927 640.557101 825.606018 647.538283ZM857.803703 635.65433 862.624587 659.553909 1004.439932 630.94774 1024 627.002195 1024 607.04816 1024 415.398229 1024 396.088627 1005.203806 391.665525 870.881523 360.056928 865.296766 383.789634 888.340587 375.826398C884.98377 366.112521 881.22675 356.514699 877.099219 347.111631L854.774381 356.911245 875.338534 370.008819 951.607706 250.260619 962.34231 233.406505 947.924307 219.571255 807.553406 84.873956 793.797813 71.674344 777.670669 81.841021 664.221513 153.36025 677.223499 173.984973 687.819315 152.026842C676.702449 146.662439 665.295885 141.79561 653.698526 137.468057L645.174865 160.310518 669.02464 155.248996 640.176969 19.31943 636.0769 0 616.327194 0 419.771153 0 400.690923 0 396.104919 18.520901 363.157965 151.579527 386.824198 157.439578 378.813118 134.412346C371.096704 137.096855 363.448934 140.021092 355.916838 143.167538L365.314667 165.664463 377.935979 144.804613 255.154767 70.515502 238.88953 60.674174 225.379878 74.049489 87.219113 210.836425 72.972426 224.941449 84.058966 241.644992 157.473798 352.255518 177.787526 338.772813 156.044514 327.742298C151.336434 337.02272 146.99905 346.509743 143.067323 356.128497L165.635683 365.353459 160.050276 341.620907 18.795545 374.864917 0 379.28841 0 398.59747 0 590.247401 0 610.201867 19.560572 614.147083 154.441241 641.351467 159.261622 617.451787 136.256342 625.52569C139.682853 635.288979 143.513008 644.930182 147.71909 654.377779L169.992425 644.461662 149.333613 631.513907 71.392628 755.872779 60.94464 772.543085 75.031143 786.277348 214.014438 921.785293 227.881289 935.305393 244.18813 924.856971 364.008004 848.08377 350.854609 827.555277 340.519036 849.637097C348.675428 853.454763 356.968563 857.002997 365.342891 860.257811L374.17527 837.532937 350.509022 843.392932 384.606182 981.098091 389.192156 999.619046 408.272431 999.619046 604.846304 999.619049 624.595936 999.619049 628.696062 980.299706 656.615319 848.747183 632.765562 843.685572 640.489184 866.810807C649.912247 863.663588 659.243565 860.157199 668.413638 856.318227L658.998519 833.828531 646.519381 854.773745 774.081971 930.775422 790.172006 940.36185 803.581897 927.286545 942.565193 791.770995 957.136469 777.563281 945.761519 760.687509 867.642208 644.790413 847.425094 658.417562 869.244171 669.296841C873.230259 661.302494 876.932843 653.181798 880.328282 644.985685L857.803703 635.65433Z"  ></path>' +
    '' +
    '<path d="M731.428572 499.809523C731.428572 385.355085 638.644915 292.571428 524.190477 292.571428 409.736036 292.571428 316.952382 385.355085 316.952382 499.809523 316.952382 614.263964 409.736036 707.047618 524.190477 707.047618 553.504879 707.047618 582.005801 700.942889 608.253005 689.28262 620.558583 683.815889 626.102566 669.408589 620.635836 657.10301 615.169107 644.797434 600.761807 639.253451 588.456228 644.720179 568.411953 653.624811 546.651767 658.285715 524.190477 658.285715 436.666494 658.285715 365.714285 587.333506 365.714285 499.809523 365.714285 412.28554 436.666494 341.333333 524.190477 341.333333 611.71446 341.333333 682.666667 412.28554 682.666667 499.809523 682.666667 511.374255 681.431994 522.7624 679.007782 533.847245 676.130985 547.001574 684.462569 559.997374 697.616898 562.874172 710.77123 565.75097 723.767027 557.419386 726.643825 544.265056 729.815238 529.763582 731.428572 514.882835 731.428572 499.809523Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-account" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M793.6 316.991454C793.6 153.703982 661.792629 21.333333 499.2 21.333333 336.607371 21.333333 204.8 153.703982 204.8 316.991454 204.8 480.278923 336.607371 612.649572 499.2 612.649572 661.792629 612.649572 793.6 480.278923 793.6 316.991454ZM256 316.991454C256 182.101803 364.88435 72.752137 499.2 72.752137 633.51565 72.752137 742.4 182.101803 742.4 316.991454 742.4 451.881103 633.51565 561.230769 499.2 561.230769 364.88435 561.230769 256 451.881103 256 316.991454Z"  ></path>' +
    '' +
    '<path d="M0 998.290598 0 1024 25.6 1024 486.4 1024 998.4 1024 1024 1024 1024 998.290598C1024 767.462671 787.090923 561.230769 512 561.230769 495.448045 561.230769 478.989086 561.900892 462.660538 563.232578 448.568439 564.381869 485.255599 576.786276 486.4 590.938596 501.350035 589.719337 496.831226 612.649572 512 612.649572 760.310844 612.649572 972.8 797.623669 972.8 998.290598L998.4 972.581197 486.4 972.581197 25.6 972.581197 51.2 998.290598C51.2 861.757427 137.013906 736.945338 275.263548 667.439085 287.906261 661.082846 293.024384 645.637353 286.695191 632.94061 280.366001 620.243866 264.986234 615.103872 252.34352 621.460111 97.581613 699.268053 0 841.195691 0 998.290598Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-add" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M853.333333 533.333333C865.115407 533.333333 874.666667 523.782074 874.666667 512 874.666667 500.217926 865.115407 490.666667 853.333333 490.666667L170.666667 490.666667C158.884592 490.666667 149.333333 500.217926 149.333333 512 149.333333 523.782074 158.884592 533.333333 170.666667 533.333333L853.333333 533.333333Z"  ></path>' +
    '' +
    '<path d="M490.666667 853.333333C490.666667 865.115407 500.217926 874.666667 512 874.666667 523.782074 874.666667 533.333333 865.115407 533.333333 853.333333L533.333333 170.666667C533.333333 158.884592 523.782074 149.333333 512 149.333333 500.217926 149.333333 490.666667 158.884592 490.666667 170.666667L490.666667 853.333333Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-assessedbadge" viewBox="0 0 1026 1024">' +
    '' +
    '<path d="M704.533333 341.333333c0 4.266667-2.133333 8.533333-4.266667 12.8l-183.466667 341.333333c-8.533333 17.066667-27.733333 27.733333-49.066667 27.733333-17.066667 0-32-6.4-40.533333-19.2l-100.266667-115.2c-4.266667-4.266667-6.4-10.666667-6.4-17.066667 0-14.933333 12.8-27.733333 27.733333-27.733333 4.266667 0 8.533333 2.133333 12.8 4.266667l91.733333 49.066667 200.533333-273.066667c6.4-6.4 12.8-10.666667 23.466667-10.666667C691.733333 315.733333 704.533333 326.4 704.533333 341.333333z"  ></path>' +
    '' +
    '<path d="M512.533333 42.666667c21.333333 0 42.666667 8.533333 57.6 23.466667l89.6 89.6 125.866667 0c44.8 0 83.2 36.266667 83.2 83.2l0 125.866667 89.6 89.6c32 32 32 85.333333 0 117.333333l-89.6 89.6 0 125.866667c0 44.8-36.266667 83.2-83.2 83.2l-125.866667 0-89.6 89.6C555.2 972.8 533.866667 981.333333 512.533333 981.333333s-42.666667-8.533333-57.6-23.466667l-89.6-89.6-125.866667 0c-44.8 0-83.2-36.266667-83.2-83.2l0-125.866667-89.6-89.6c-32-32-32-85.333333 0-117.333333l89.6-89.6 0-125.866667C156.266667 192 192.533333 155.733333 239.466667 155.733333l125.866667 0 89.6-89.6C469.866667 51.2 491.2 42.666667 512.533333 42.666667M512.533333 0c-34.133333 0-66.133333 12.8-87.466667 36.266667l-76.8 76.8-108.8 0c-68.266667 0-125.866667 55.466667-125.866667 125.866667l0 108.8-76.8 76.8c-49.066667 49.066667-49.066667 128 0 177.066667l76.8 76.8 0 108.8c0 68.266667 55.466667 125.866667 125.866667 125.866667l108.8 0 76.8 76.8C448.533333 1011.2 478.4 1024 512.533333 1024c34.133333 0 64-12.8 87.466667-36.266667l76.8-76.8 108.8 0c68.266667 0 125.866667-55.466667 125.866667-125.866667l0-108.8 76.8-76.8c49.066667-49.066667 49.066667-128 0-177.066667l-76.8-76.8 0-108.8c0-68.266667-55.466667-125.866667-125.866667-125.866667l-108.8 0-76.8-76.8C578.666667 12.8 546.666667 0 512.533333 0L512.533333 0z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-icondownload" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M995.84 1024 28.16 1024C12.8 1024 0 1011.2 0 995.84l0 0c0-15.36 12.8-28.16 28.16-28.16l967.68 0c15.36 0 28.16 12.8 28.16 28.16l0 0C1024 1011.2 1011.2 1024 995.84 1024z"  ></path>' +
    '' +
    '<path d="M926.72 376.32 926.72 376.32c-10.24-10.24-30.72-10.24-40.96 0L537.6 721.92 537.6 28.16C537.6 12.8 527.36 0 512 0s-25.6 12.8-25.6 28.16l0 693.76L138.24 376.32c-10.24-10.24-30.72-10.24-40.96 0-10.24 10.24-10.24 28.16 0 40.96l394.24 394.24c2.56 2.56 2.56 2.56 5.12 2.56 0 0 2.56 2.56 2.56 2.56 7.68 2.56 15.36 2.56 23.04 0 2.56 0 2.56-2.56 2.56-2.56 2.56 0 5.12-2.56 5.12-2.56l394.24-394.24C936.96 404.48 936.96 386.56 926.72 376.32z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-phone" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M942.08 738.304c-25.6-23.552-55.296-47.104-76.8-61.44-27.648-19.456-57.344-38.912-84.992-51.2-43.008-21.504-59.392-25.6-70.656-25.6-19.456 0-35.84 10.24-51.2 29.696-8.192 12.288-17.408 29.696-23.552 45.056-4.096 10.24-12.288 27.648-17.408 33.792-8.192-2.048-31.744-12.288-70.656-37.888-35.84-25.6-74.752-57.344-104.448-84.992-29.696-29.696-59.392-68.608-84.992-104.448-25.6-37.888-35.84-61.44-37.888-70.656 6.144-4.096 23.552-12.288 33.792-17.408 15.36-6.144 31.744-12.288 45.056-23.552 21.504-15.36 29.696-31.744 29.696-51.2 0-10.24-2.048-27.648-25.6-70.656-12.288-25.6-31.744-55.296-51.2-84.992-15.36-21.504-38.912-51.2-61.44-76.8-27.648-27.648-47.104-40.96-66.56-40.96-47.104 0-100.352 68.608-114.688 87.04-19.456 25.6-66.56 96.256-66.56 159.744 0 59.392 40.96 138.24 74.752 194.56 45.056 72.704 108.544 153.6 177.152 224.256l21.504 21.504 0 0c70.656 68.608 149.504 132.096 224.256 177.152 23.552 15.36 51.2 29.696 78.848 43.008l0 0c4.096 2.048 6.144 2.048 10.24 2.048 15.36 0 27.648-12.288 27.648-27.648 0-10.24-6.144-21.504-17.408-25.6-21.504-10.24-45.056-23.552-70.656-38.912-70.656-43.008-145.408-102.4-212.992-168.96l-21.504-21.504c-66.56-68.608-125.952-143.36-168.96-212.992-43.008-68.608-66.56-128-66.56-163.84 0-31.744 19.456-78.848 53.248-123.904 15.36-19.456 29.696-37.888 45.056-51.2 15.36-13.312 23.552-17.408 27.648-17.408 10.24 4.096 43.008 31.744 87.04 98.304 17.408 25.6 33.792 51.2 45.056 74.752 15.36 27.648 17.408 40.96 17.408 43.008 0 0-4.096 4.096-10.24 8.192-8.192 4.096-21.504 10.24-31.744 15.36-15.36 6.144-27.648 12.288-40.96 19.456-19.456 12.288-27.648 27.648-27.648 45.056 0 8.192 0 33.792 49.152 104.448 25.6 37.888 59.392 80.896 92.16 112.64l0 0c31.744 31.744 74.752 66.56 112.64 92.16 70.656 47.104 96.256 49.152 104.448 49.152l0 0c17.408 0 31.744-8.192 45.056-27.648 8.192-10.24 12.288-25.6 19.456-40.96 4.096-10.24 10.24-23.552 15.36-31.744 6.144-4.096 10.24-6.144 10.24-6.144 2.048 0 15.36 2.048 43.008 17.408 21.504 12.288 49.152 27.648 74.752 45.056 63.488 45.056 94.208 76.8 98.304 87.04-2.048 4.096-6.144 12.288-17.408 27.648-12.288 15.36-31.744 31.744-51.2 45.056-29.696 21.504-61.44 38.912-87.04 47.104l0 0c-10.24 4.096-17.408 15.36-17.408 25.6 0 15.36 12.288 27.648 27.648 27.648 2.048 0 4.096 0 6.144-2.048l0 0c2.048 0 2.048 0 4.096-2.048l0 0c45.056-15.36 82.944-40.96 102.4-55.296 21.504-15.36 87.04-70.656 87.04-115.712C982.016 785.408 969.728 765.952 942.08 738.304z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-survey" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M731.499531 47.014558C770.629127 47.014558 802.392705 78.618418 802.392705 117.545505L802.392744 446.638311 412.872048 846.262065 423.917326 846.262039 139.970966 846.262039C100.8091 846.262039 69.096657 814.801393 69.096657 775.971075L69.096655 47.014558 45.441945 47.014558 731.499531 47.014558ZM21.787234 0 21.787234 23.507279 21.787234 775.971075C21.787234 840.784929 74.69902 893.276596 139.970966 893.276596L423.917326 893.276596 433.836385 893.276596 440.788839 886.246008 842.918932 479.596694 849.702128 472.737265 849.702128 463.120003 849.702128 117.545505C849.702128 52.665733 796.770234 0 731.499531 0L45.441945 0 21.787234 0Z"  ></path>' +
    '' +
    '<path d="M778.22803 636.420841 866.898308 725.091119 885.125447 744.577647 982.593479 646.374481 855.512968 518.560378 759.89601 618.825996 778.22803 636.420841ZM917.371009 643.055851 882.031912 678.622341 822.728724 621.430852 856.902924 584.309841 917.371009 643.055851Z"  ></path>' +
    '' +
    '<path d="M772.341518 604.741944 515.869818 861.213644 510.878071 866.205391 509.49361 873.127701 486.177999 989.705748 479.319149 1024 513.613401 1017.14115 630.191448 993.825539 637.113758 992.441078 642.105505 987.449331 898.577205 730.977631 915.06383 714.491006 898.577205 698.00438 805.314769 604.741944 788.828143 588.255319 772.341518 604.741944 772.341518 604.741944 772.341518 604.741944ZM788.548057 654.71881 849.238319 714.613627 613.059177 948.099878 537.423434 964.538791 556.253326 886.787689 788.548057 654.71881Z"  ></path>' +
    '' +
    '<path d="M154.380179 392.170213 695.321949 392.170213C708.387226 392.170213 718.978723 382.415735 718.978723 370.382979 718.978723 358.350223 708.387226 348.595745 695.321949 348.595745L154.380179 348.595745C141.314903 348.595745 130.723404 358.350223 130.723404 370.382979 130.723404 382.415735 141.314903 392.170213 154.380179 392.170213L154.380179 392.170213 154.380179 392.170213Z"  ></path>' +
    '' +
    '<path d="M154.380179 239.659574 695.321949 239.659574C708.387226 239.659574 718.978723 229.905096 718.978723 217.87234 718.978723 205.839583 708.387226 196.085106 695.321949 196.085106L154.380179 196.085106C141.314903 196.085106 130.723404 205.839583 130.723404 217.87234 130.723404 229.905096 141.314903 239.659574 154.380179 239.659574L154.380179 239.659574 154.380179 239.659574Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-trade" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M1024 512C1024 229.230208 794.769792 0 512 0 229.230208 0 0 229.230208 0 512 0 794.769792 229.230208 1024 512 1024 625.686419 1024 733.786972 986.820171 822.292028 919.295213 832.066406 911.83785 833.944717 897.868762 826.487354 888.094383 819.029988 878.320004 805.0609 876.441692 795.286522 883.899057 714.473916 945.555057 615.842022 979.478261 512 979.478261 253.818886 979.478261 44.521739 770.181114 44.521739 512 44.521739 253.818886 253.818886 44.521739 512 44.521739 770.181114 44.521739 979.478261 253.818886 979.478261 512 979.478261 599.047373 955.670714 682.541024 911.318368 755.201306 904.912864 765.695127 908.227102 779.394737 918.720924 785.800239 929.214746 792.205743 942.914355 788.891505 949.319857 778.397683 997.906701 698.800235 1024 607.290394 1024 512Z"  ></path>' +
    '' +
    '<path d="M551.801933 843.859904C551.801933 843.859904 551.910146 860.977865 529.538995 860.977865 507.167844 860.977865 503.178743 843.859904 503.178743 843.859904L503.178743 766.939614C414.434338 757.374349 357.575004 715.792638 332.599034 642.193237 332.599034 642.193237 321.314219 616.817284 346.988612 607.420567 372.663008 598.023853 386.403381 621.070048 386.403381 621.070048 407.128124 677.133131 446.052855 707.555531 503.178743 712.338163L503.178743 527.410628C441.270221 512.531326 401.083426 493.135386 382.61715 469.222223 364.150874 445.309058 354.917875 418.739277 354.917875 389.512077 354.917875 312.458551 404.33767 265.695735 503.178743 249.222223L503.178743 183.461353C503.178743 183.461353 508.270528 165.816358 526.337227 165.816358 544.403925 165.816358 551.801933 183.461353 551.801933 183.461353L551.801933 249.222223C630.183966 256.130468 681.596497 291.202581 706.041062 354.439614 706.041062 354.439614 706.041062 374.760719 686.661534 380.219202 667.282005 385.677687 651.838163 371.975846 651.838163 371.975846 637.224565 328.666449 603.879488 305.285041 551.801933 301.830918L551.801933 472.410628C661.536781 492.072561 716.403381 541.492358 716.403381 620.671497 716.403381 654.681329 703.915584 686.232947 678.939614 715.327294 653.963644 744.421643 611.584841 761.625577 551.801933 766.939614L551.801933 843.859904ZM503.178743 301.830918C475.811458 303.956533 453.957811 312.326014 437.61715 326.939614 421.276489 341.553214 413.106281 360.019213 413.106281 382.338163 413.106281 426.178963 443.130135 453.811537 503.178743 465.236715L503.178743 301.830918ZM551.801933 712.338163C584.217553 711.009655 609.525271 702.108779 627.725845 685.635266 645.926419 669.161754 655.026571 649.367266 655.026571 626.251209 655.026571 577.096373 620.618701 547.736764 551.801933 538.171497L551.801933 712.338163Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-favorites" viewBox="0 0 1143 1024">' +
    '' +
    '<path d="M840.870698 8.239628c-80.634047 0-153.790512 31.672558-207.967256 83.134512a24.957023 24.957023 0 0 0-9.287442 19.33693 25.099907 25.099907 0 0 0 42.984186 17.598511l0.047628 0.023814c45.246512-43.341395 106.61507-69.989209 174.222884-69.989209 139.240186 0 252.094512 112.87814 252.094511 252.094512 0 67.631628-26.671628 128.952558-69.989209 174.246697l-451.322047 451.750698-451.560186-451.750698a251.165767 251.165767 0 0 1-70.013023-174.246697C50.080744 171.222326 162.958884 58.344186 302.19907 58.344186c66.917209 0 127.690419 26.171535 172.841674 68.72707l150.599442 150.456558a24.909395 24.909395 0 0 0 35.244651-35.244651l-149.14679-149.265861 0.119069-0.095255A301.127442 301.127442 0 0 0 302.19907 8.239628C135.263256 8.239628 0 143.550512 0 310.438698c0 81.443721 32.267907 155.314605 84.658605 209.658046l486.995348 486.828651 487.042977-487.138232A301.103628 301.103628 0 0 0 1143.069767 310.462512C1143.069767 143.526698 1007.782698 8.239628 840.870698 8.239628"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)