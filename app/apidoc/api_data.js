define({ "api": [
  {
    "type": "post",
    "url": "api/v1/meeting/getAllMeetingForUser",
    "title": "Request User information",
    "version": "0.0.1",
    "name": "Meeting_Information",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>the token for  authentication.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "   {\n    \"error\": false,\n    \"message\": \"All Meeting Details Found\",\n    \"status\": 200,\n    \"data\": [\n                {\n                    \"meetingId\" : \"gdhasrg\",\n                    \"userId\" : \"sdrgargg\",\n                    \"userName\" : \"gajal\",\n                    \"adminName\" : \"Suresh\",\n                    \"adminId\" : \"gsgaga\",\n                    \"Date\" : \"08/22/2018\",\n                    \"time\" : \"20.00\",\n                    \"countryCode\" : \"91\",\n                    \"where\" : \"Delhi\"           \n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response;",
          "content": "{\n  \"error\" : true,\n  \"message\" : \"Error Occured\",\n  \"Status\" : \"500\",\n  \"data\" : null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/metting.js",
    "group": "_home_gajal_pc_node_planner_app_routes_metting_js",
    "groupTitle": "_home_gajal_pc_node_planner_app_routes_metting_js"
  },
  {
    "type": "post",
    "url": "api/v1/meeting/addMeeting",
    "title": "Request User information",
    "version": "0.0.1",
    "name": "Meeting_Information",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>the token for  authentication.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "   {\n    \"error\": false,\n    \"message\": \"All Meeting Details Found\",\n    \"status\": 200,\n    \"data\": [\n                {\n                    \"meetingId\" : \"gdhasrg\",\n                    \"userId\" : \"sdrgargg\",\n                    \"userName\" : \"gajal\",\n                    \"adminName\" : \"Suresh\",\n                    \"adminId\" : \"gsgaga\",\n                    \"Date\" : \"08/22/2018\",\n                    \"time\" : \"20.00\",\n                    \"countryCode\" : \"91\",\n                    \"where\" : \"Delhi\"           \n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response;",
          "content": "{\n  \"error\" : true,\n  \"message\" : \"Error Occured\",\n  \"Status\" : \"500\",\n  \"data\" : null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/metting.js",
    "group": "_home_gajal_pc_node_planner_app_routes_metting_js",
    "groupTitle": "_home_gajal_pc_node_planner_app_routes_metting_js"
  },
  {
    "type": "post",
    "url": "api/v1/meeting/updateMeeting",
    "title": "Request User information",
    "version": "0.0.1",
    "name": "Meeting_Information",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>the token for  authentication.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "   {\n    \"error\": false,\n    \"message\": \"All Meeting Details Found\",\n    \"status\": 200,\n    \"data\": [\n                {\n                    \"update\" : \"Meeting update successfully\"         \n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response;",
          "content": "{\n  \"error\" : true,\n  \"message\" : \"Error Occured\",\n  \"Status\" : \"500\",\n  \"data\" : null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/metting.js",
    "group": "_home_gajal_pc_node_planner_app_routes_metting_js",
    "groupTitle": "_home_gajal_pc_node_planner_app_routes_metting_js"
  },
  {
    "type": "post",
    "url": "api/v1/meeting/deleteMeeting",
    "title": "Request User information",
    "version": "0.0.1",
    "name": "Meeting_Information",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>the token for  authentication.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "   {\n    \"error\": false,\n    \"message\": \"All Meeting Details Found\",\n    \"status\": 200,\n    \"data\": [\n                {\n                    \"delete\" : \"Succesfully Deleted\"           \n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response;",
          "content": "{\n  \"error\" : true,\n  \"message\" : \"Error Occured\",\n  \"Status\" : \"500\",\n  \"data\" : null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/metting.js",
    "group": "_home_gajal_pc_node_planner_app_routes_metting_js",
    "groupTitle": "_home_gajal_pc_node_planner_app_routes_metting_js"
  },
  {
    "type": "post",
    "url": "api/v1/meeting/getMeetingByMeetingId",
    "title": "Request User information",
    "version": "0.0.1",
    "name": "Meeting_Information",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>the token for  authentication.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "   {\n    \"error\": false,\n    \"message\": \"All Meeting Details Found\",\n    \"status\": 200,\n    \"data\": [\n                {\n                    \"meetingId\" : \"gdhasrg\",\n                    \"userId\" : \"sdrgargg\",\n                    \"userName\" : \"gajal\",\n                    \"adminName\" : \"Suresh\",\n                    \"adminId\" : \"gsgaga\",\n                    \"Date\" : \"08/22/2018\",\n                    \"time\" : \"20.00\",\n                    \"countryCode\" : \"91\",\n                    \"where\" : \"Delhi\"           \n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response;",
          "content": "{\n  \"error\" : true,\n  \"message\" : \"Error Occured\",\n  \"Status\" : \"500\",\n  \"data\" : null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/metting.js",
    "group": "_home_gajal_pc_node_planner_app_routes_metting_js",
    "groupTitle": "_home_gajal_pc_node_planner_app_routes_metting_js"
  },
  {
    "type": "get",
    "url": "api/v1/users/forgotpassword",
    "title": "Request information",
    "version": "0.0.1",
    "name": "forgot_password",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sent",
            "description": "<p>email on your emailId</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": " \n{\n    \"error\": false,\n    \"message\": \"Password changed successfully!\",\n    \"status\": 200,\n    \"data\": {\n        \"_id\": \"5b8008d43715804f68370564\",\n        \"__v\": 0,\n        \"createdOn\": \"2018-08-24T13:32:04.000Z\",\n        \"active\": false,\n        \"hash\": \"vtb0209zg18sfvhg80xhuaxbj524qgbp\",\n        \"countryCode\": \"91\",\n        \"phoneNumber\": \"7543067097\",\n        \"emailId\": \"gajalchouhan@mailinator.com\",\n        \"password\": \"$2a$10$SyY1i27q1XudwYShPRg10eTU.6lvfIa53ShMUQxa73V1.I5Z9RhiS\",\n        \"lastName\": \"Vasita\",\n        \"firstName\": \"Gajal\",\n        \"admin\": \"admin\",\n        \"userId\": \"FWMCkevu8\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response;",
          "content": "{\n  \"error\" : true,\n  \"message\" : \"Error Occured\",\n  \"Status\" : \"500\",\n  \"data\" : null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/user.js",
    "group": "_home_gajal_pc_node_planner_app_routes_user_js",
    "groupTitle": "_home_gajal_pc_node_planner_app_routes_user_js"
  },
  {
    "type": "get",
    "url": "api/v1/users/forgotpassword",
    "title": "Request information",
    "version": "0.0.1",
    "name": "forgot_password",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sent",
            "description": "<p>email on your emailId</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "  \n{\n    \"error\": false,\n    \"message\": \"Mail Sent Successful!\",\n    \"status\": 200,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response;",
          "content": "{\n  \"error\" : true,\n  \"message\" : \"Error Occured\",\n  \"Status\" : \"500\",\n  \"data\" : null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/user.js",
    "group": "_home_gajal_pc_node_planner_app_routes_user_js",
    "groupTitle": "_home_gajal_pc_node_planner_app_routes_user_js"
  },
  {
    "type": "get",
    "url": "api/v1/users/view/all",
    "title": "Request User information",
    "version": "0.0.1",
    "name": "getAllUser",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>the token for  authentication.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "   {\n    \"error\": false,\n    \"message\": \"All User Details Found\",\n    \"status\": 200,\n    \"data\": [\n                {\n            \"createdOn\": \"2018-08-24T13:40:05.000Z\",\n            \"active\": false,\n            \"hash\": \"19yh1h543xmhk9z2wwukpphbi9r73wojbw\",\n            \"countryCode\": \"91\",\n            \"phoneNumber\": \"7543067097\",\n            \"emailId\": \"royal@mailinator.com\",\n            \"password\": \"$2a$10$MTuPlG4fwJxYmNDHth4s5uxTt5hQDQ6fWnlmXc.gTFu3XIuVpkMqa\",\n            \"lastName\": \"Kumar\",\n            \"firstName\": \"Royal\",\n            \"admin\": \"no\",\n            \"userId\": \"ejtcfRwFA\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response;",
          "content": "{\n  \"error\" : true,\n  \"message\" : \"Error Occured\",\n  \"Status\" : \"500\",\n  \"data\" : null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/user.js",
    "group": "_home_gajal_pc_node_planner_app_routes_user_js",
    "groupTitle": "_home_gajal_pc_node_planner_app_routes_user_js"
  },
  {
    "type": "post",
    "url": "api/v1/users/verify",
    "title": "Request User information",
    "version": "0.0.1",
    "name": "signup",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "signup",
            "description": "<p>user as a normal or admin</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "  \n{\n    \"error\": false,\n    \"message\": \"User Verified Successfully.\",\n    \"status\": 200,\n    \"data\": {\n        \"n\": 1,\n        \"nModified\": 1,\n        \"ok\": 1\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response;",
          "content": "{\n  \"error\" : true,\n  \"message\" : \"Error Occured\",\n  \"Status\" : \"500\",\n  \"data\" : null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/user.js",
    "group": "_home_gajal_pc_node_planner_app_routes_user_js",
    "groupTitle": "_home_gajal_pc_node_planner_app_routes_user_js"
  },
  {
    "type": "post",
    "url": "api/v1/users/signup",
    "title": "Request User information",
    "version": "0.0.1",
    "name": "signup",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "signup",
            "description": "<p>user as a normal or admin</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "  \n{\n    \"error\": false,\n    \"message\": \"User created\",\n    \"status\": 200,\n    \"data\": {\n        \"__v\": 0,\n        \"_id\": \"5b80e863412f79184ab974f9\",\n        \"createdOn\": \"2018-08-25T05:25:55.000Z\",\n        \"active\": false,\n        \"hash\": \"78zi15lxaw3wspsz4br0aik6kj9pjdk6\",\n        \"countryCode\": \"91\",\n        \"phoneNumber\": \"7543067098\",\n        \"emailId\": \"123@mailinator.com\",\n        \"lastName\": \"Kumar\",\n        \"firstName\": \"Rohan\",\n        \"admin\": \"admin\",\n        \"userId\": \"xCqvwsVLr\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response;",
          "content": "{\n  \"error\" : true,\n  \"message\" : \"Error Occured\",\n  \"Status\" : \"500\",\n  \"data\" : null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/user.js",
    "group": "_home_gajal_pc_node_planner_app_routes_user_js",
    "groupTitle": "_home_gajal_pc_node_planner_app_routes_user_js"
  },
  {
    "type": "get",
    "url": "api/v1/users/verify",
    "title": "Request User information",
    "version": "0.0.1",
    "name": "verify_Email",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "verify",
            "description": "<p>user</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "  \n{\n    \"error\": false,\n    \"message\": \"User Verified Successfully.\",\n    \"status\": 200,\n    \"data\": {\n        \"n\": 1,\n        \"nModified\": 1,\n        \"ok\": 1\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response;",
          "content": "{\n  \"error\" : true,\n  \"message\" : \"Error Occured\",\n  \"Status\" : \"500\",\n  \"data\" : null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/user.js",
    "group": "_home_gajal_pc_node_planner_app_routes_user_js",
    "groupTitle": "_home_gajal_pc_node_planner_app_routes_user_js"
  }
] });
