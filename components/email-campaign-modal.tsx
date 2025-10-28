"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface EmailCampaignModalProps {
  isOpen: boolean
  onClose: () => void
}

export function EmailCampaignModal({ isOpen, onClose }: EmailCampaignModalProps) {
  const emailTemplateHTML = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width" />
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" type="text/css">
    <style type="text/css">
        * {
            margin: 0;
            padding: 0;
            font-size: 100%;
            font-family: 'Roboto', 'Avenir Next', 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
            line-height: 1.65;
        }
        img {
            max-width: 100%;
            margin: 0 auto;
            display: block;
        }
        body, .body-wrap {
            width: 100% !important;
            height: 100%;
            background: url('https://storage.emojot.com/pictures/emailTemplateImages/email-temp-background.png?v=1');
            background-repeat: no-repeat;
            background-size: cover;
            color: black;
        }
        a {
            color: #017ABF;
        }
        .text-center {
            text-align: center;
        }
        .text-right {
            text-align: right;
        }
        .text-left {
            text-align: left;
        }
        .container {
            display: block !important;
            clear: both !important;
            margin: 0 auto !important;
            max-width: 580px !important;
        }
        .container table {
            width: 100% !important;
            border-collapse: collapse;
        }
        .container .content {
            display: block;
            padding: 30px 20px;
            background: white;
        }
        .container .content.footer {
            background: white;
            height: 42px;
            padding-top: 2px;
            padding-bottom: 5px;
        }
        .container .content.footer p {
            margin-bottom: 0;
            color: #888;
            text-align: center;
            font-size: 14px;
        }
        h1, h2, h3 {
            font-family: 'Roboto', 'Avenir Next', 'Helvetica Neue', 'Helvetica', Arial, sans-serif;
            color: #000;
            margin: 40px 0 10px;
            line-height: 1.25;
            font-weight: 300;
        }
        h1 {
            font-size: 32px;
        }
        h2 {
            font-size: 28px;
        }
        h3 {
            font-size: 22px;
        }
        h4 {
            font-size: 20px;
            margin-bottom: 20px;
            line-height: 1.25;
        }
        p, ul, ol {
            font-size: 16px;
            font-weight: normal;
            margin-bottom: 20px;
        }
        .container ul li, .container ol li {
            margin-left: 5px;
            list-style-position: inside;
        }
        .button {
            display: inline-block;
            color: white;
            background: #017ABF;
            border: solid #017ABF;
            border-width: 10px 20px 8px;
            font-weight: bold;
            border-radius: 4px;
            text-decoration: none;
        }
    </style>
</head>
<body>
    <table class="body-wrap">
        <tr>
            <td class="container">
                <center>
                    <table class="container" style="border-spacing: 0px;">
                        <tr>
                            <td align="center" class="masthead">
                                <img src="https://storage.emojot.com/pictures/emailTemplateImages/banner_email_test.png" />
                            </td>
                        </tr>
                        <tr style="background: white;">
                            <td>
                                <hr style="border: 1px solid #efeeee;" />
                            </td>
                        </tr>
                        <tr>
                            <td class="content">
                                <h4>Welcome to Emojot Workable!</h4>
                                <div>
                                    <span style="font-size: 16px;">This multi-rater survey will gather feedback on how the team members performed at Emojot. Please take a few minutes to complete this survey on <strong>$subjectName$</strong> who has identified you to provide feedback as a <strong>$evaluatorRelationship$</strong> on or before Thursday, <strong>Sept 4, 2025</strong>.</span>
                                </div>
                                <br />
                                <p>
                                    <span>The ratings you provide will remain <strong>confidential</strong>.</span>
                                </p>
                                <p>
                                    <span>To begin, click on the button/link below.</span>
                                </p>
                                <center>
                                    <a class="button" href="#">Click here to Respond</a>
                                </center>
                                <p>Regards, <br />Emojot HR</p>
                            </td>
                        </tr>
                        <tr style="background: white;">
                            <td>
                                <hr style="border: 1px solid #efeeee;" />
                            </td>
                        </tr>
                        <tr>
                            <td class="content footer" height="42">
                                <table>
                                    <tr>
                                        <td>
                                            <p align="left" style="text-align: left;">Powered by Emojot</p>
                                        </td>
                                        <td width="200">
                                            <a href="http://emojot.com/">
                                                <img style="width: 80px; float: right;" align="right" src="https://storage.emojot.com/logos/emojot/emojot2019.png" width="80" />
                                            </a>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </center>
            </td>
        </tr>
    </table>
  </body>
</html>
  `

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="max-w-[95vw] max-h-[90vh] p-0 gap-0 overflow-hidden"
        style={{ maxWidth: "1400px", width: "95vw" }}
      >
        <DialogHeader className="px-4 md:px-6 py-3 md:py-4 border-b bg-white">
          <DialogTitle className="text-sm md:text-base font-normal text-gray-700">Message configuration</DialogTitle>
        </DialogHeader>

        <div className="overflow-y-auto px-4 md:px-6 py-4 md:py-6 bg-gray-50 max-h-[calc(90vh-80px)]">
          <div className="space-y-4 bg-white p-4 md:p-6 rounded">
            {/* Message type */}
            <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] items-start md:items-center gap-2 md:gap-4">
              <label className="text-xs md:text-sm text-gray-600">Message type</label>
              <select className="w-full border border-gray-300 rounded px-3 py-2 text-xs md:text-sm bg-white">
                <option>Email</option>
              </select>
            </div>

            {/* Template */}
            <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] items-start md:items-center gap-2 md:gap-4">
              <label className="text-xs md:text-sm text-gray-600">Template</label>
              <select className="w-full border border-gray-300 rounded px-3 py-2 text-xs md:text-sm bg-white">
                <option>Emojot Team Member 360 Survey Normal Demo</option>
              </select>
            </div>

            {/* Survey to embed */}
            <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] items-start md:items-center gap-2 md:gap-4">
              <label className="text-xs md:text-sm text-gray-600">Survey to embed</label>
              <select className="w-full border border-gray-300 rounded px-3 py-2 text-xs md:text-sm bg-white">
                <option>Emojot Workable v4</option>
              </select>
            </div>

            {/* From email */}
            <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] items-start md:items-center gap-2 md:gap-4">
              <label className="text-xs md:text-sm text-gray-600">From email</label>
              <input
                type="text"
                defaultValue="noreply@emojot.com"
                className="w-full border border-gray-300 rounded px-3 py-2 text-xs md:text-sm"
              />
            </div>

            {/* From name */}
            <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] items-start md:items-center gap-2 md:gap-4">
              <label className="text-xs md:text-sm text-gray-600">From name</label>
              <input
                type="text"
                defaultValue="Emojot Workable (Test By Lankesh)"
                className="w-full border border-gray-300 rounded px-3 py-2 text-xs md:text-sm"
              />
            </div>

            {/* Reply-To */}
            <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] items-start md:items-center gap-2 md:gap-4">
              <label className="text-xs md:text-sm text-gray-600">Reply-To</label>
              <input type="text" className="w-full border border-gray-300 rounded px-3 py-2 text-xs md:text-sm" />
            </div>

            {/* Subject */}
            <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] items-start md:items-center gap-2 md:gap-4">
              <label className="text-xs md:text-sm text-gray-600">Subject</label>
              <input
                type="text"
                defaultValue="Emojot Workable Survey: $subjectName$"
                className="w-full border border-gray-300 rounded px-3 py-2 text-xs md:text-sm"
              />
            </div>

            {/* Body* */}
            <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] items-start gap-2 md:gap-4">
              <label className="text-xs md:text-sm text-gray-600 pt-2">Body*</label>
              <div className="border border-gray-300 rounded overflow-hidden bg-white">
                <iframe
                  srcDoc={emailTemplateHTML}
                  className="w-full border-0"
                  style={{ height: "600px", minHeight: "400px" }}
                  title="Email Preview"
                  sandbox="allow-same-origin"
                  onLoad={() => console.log("[v0] Email template iframe loaded")}
                />
              </div>
            </div>

            {/* Bottom section */}
            <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] items-start md:items-center gap-2 md:gap-4 pt-4">
              <label className="text-xs md:text-sm text-gray-600">Envelope</label>
              <div className="flex items-start md:items-center gap-2 md:gap-4 flex-wrap">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="h-4 w-4" />
                  <span className="text-xs md:text-sm text-gray-600">Anonymous</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="timing" defaultChecked className="h-4 w-4 accent-teal-500" />
                  <span className="text-xs md:text-sm text-gray-600 whitespace-nowrap">One time - Survey</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="timing" className="h-4 w-4" />
                  <span className="text-xs md:text-sm text-gray-600 whitespace-nowrap">One time - Campaign</span>
                </label>
                <button className="px-3 py-1 border border-gray-300 rounded text-xs md:text-sm hover:bg-gray-50 text-gray-700">
                  Continuous
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] items-start md:items-center gap-2 md:gap-4">
              <label className="text-xs md:text-sm text-gray-600">360 Feedback</label>
              <input type="checkbox" defaultChecked className="h-4 w-4 accent-teal-500" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] items-start md:items-center gap-2 md:gap-4">
              <label className="text-xs md:text-sm text-gray-600">360 Feedback Mode</label>
              <select className="w-full border border-gray-300 rounded px-3 py-2 text-xs md:text-sm bg-white">
                <option>Exclude self rating</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] items-start md:items-center gap-2 md:gap-4">
              <label className="text-xs md:text-sm text-gray-600">Evaluator List</label>
              <select className="w-full border border-gray-300 rounded px-3 py-2 text-xs md:text-sm bg-white">
                <option>360_comm</option>
              </select>
            </div>

            <p className="text-xs text-red-600 pt-2">* Indicates required fields</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
