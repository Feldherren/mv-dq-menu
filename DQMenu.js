//=============================================================================
// DQMenu.js
//=============================================================================

/*:en
 * @plugindesc Alternative menu designed to act like Dragon Quest's menu.
 * @author Feldherren
 *
 * @help This plugin does not provide plugin commands.
 */

(function() {

	var alias_Scene_Menu_prototype_create = Scene_Menu.prototype.create;
	Scene_Menu.prototype.create = function() {
		alias_Scene_Menu_prototype_create.call(this);

	    this._commandWindow.x = 30;
	    this._commandWindow.y = 30;

	    this._goldWindow.x = 816-this._goldWindow.width;
	    this._goldWindow.y = 400;

	    this._statusWindow.x = 816-this._statusWindow.width;
	    this._statusWindow.y = 400+this._goldWindow.height;
	};

	var alias_Window_MenuStatus_prototype_windowWidth = Window_MenuStatus.prototype.windowWidth;
	Window_MenuStatus.prototype.windowWidth = function() {
	    return Graphics.boxWidth - 240;
	};

	var alias_Window_MenuStatus_prototype_windowHeight = Window_MenuStatus.prototype.windowHeight;
	Window_MenuStatus.prototype.windowHeight = function() {
	    return Graphics.boxHeight/4;
	};

	var alias_Window_MenuStatus_prototype_numVisibleRows = Window_MenuStatus.prototype.numVisibleRows;
	Window_MenuStatus.prototype.numVisibleRows = function() {
	    return 1;
	};

	var alias_Window_MenuStatus_prototype_maxCols = Window_MenuStatus.prototype.maxCols;
	Window_MenuStatus.prototype.maxCols = function() {
	    return 4;
	};

})();