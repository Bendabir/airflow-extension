# Airflow Extension

This small Chrome extension aims to auto-refresh a running DAG view on the Airflow interface.

It will run on all webpages as there is no way to know the hosts in advance. This can be modified in the manifest file.

## Installation

This extension is not available on the Chrome WebStore. Therefore it must be installed manually. First open the Chrome extensions manager (_Settings_ > _More tools_ > _Extensions_). Then check the _Developer mode_ slider and click the _Load unpacked_ button. Now select the extension directory. That's it.

## Pro Tip

To avoid the extension to run on all websites, you can specify some websites within the extension settings. First open the Chrome extensions manager (_Settings_ > _More tools_ > _Extensions_). Then click on the _Details_ button of the extension. In the _Site access_ section, select the _On specific sites_ option and add your website. Note that you can add several websites.
